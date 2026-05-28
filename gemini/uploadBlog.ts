import 'dotenv/config'
import slugify from 'slugify'
import {createClient} from '@sanity/client'
import {generateTopic} from './generateTopic'
import {generateBlog} from './generateBlog'
import {uploadImageFromUrl} from './uploadImage'
import {retry, sleep} from './helpers'
import {styles, scenes, moods, cameraAngles, colorThemes, environments} from './constants'

// ==============================
// SANITY CLIENT
// ==============================
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

// ==============================
// HELPER — random array item
// ==============================
function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ==============================
// UPLOAD SINGLE BLOG
// ==============================
async function uploadBlog(): Promise<void> {
  try {
    // --------------------------
    // STEP 1: Generate Topic
    // --------------------------
    console.log('\n[1/5] Generating topic...')
    const topic = await retry(() => generateTopic())

    if (!topic || topic.trim().length < 5) {
      console.log('❌ Invalid topic generated, skipping...')
      return
    }

    console.log('✅ Topic:', topic)

    // --------------------------
    // STEP 2: Generate Blog
    // --------------------------
    console.log('\n[2/5] Generating blog content...')
    const aiBlog = await retry(() => generateBlog(topic, 'Web Development'))

    // Validate content
    if (!aiBlog?.title || !aiBlog?.content) {
      console.log('❌ Invalid blog data — missing title or content')
      return
    }

    if (aiBlog.content.length < 500) {
      console.log('❌ Content too short:', aiBlog.content.length, 'chars')
      return
    }

    console.log('✅ Blog generated:', aiBlog.title)
    console.log('   Content length:', aiBlog.content.length, 'chars')

    // --------------------------
    // STEP 3: Duplicate Check
    // --------------------------
    console.log('\n[3/5] Checking for duplicates...')
    const existing = await client.fetch(`*[_type == "blog" && title == $title][0]{ _id }`, {
      title: aiBlog.title,
    })

    if (existing) {
      console.log('⚠️  Duplicate found, skipping...')
      return
    }

    console.log('✅ No duplicate found')

    // --------------------------
    // STEP 4: Generate & Upload Image
    // --------------------------
    console.log('\n[4/5] Generating AI image...')

    const imagePrompt = encodeURIComponent(
      [
        topic,
        getRandom(styles),
        getRandom(scenes),
        getRandom(moods),
        getRandom(cameraAngles),
        getRandom(colorThemes),
        getRandom(environments),
        'completely unique composition',
        'totally different layout',
        'creative framing',
        'modern artwork',
        'high detail',
        'dynamic lighting',
        'ultra realistic',
        '4k',
      ].join(', '),
    )

    const randomSeed = Math.floor(Math.random() * 1_000_000)
    const aiImageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}?seed=${randomSeed}&width=1280&height=720&nologo=true`

    console.log('   Waiting 6s for image render...')
    await sleep(6000)

    let uploadedImage = null
    try {
      uploadedImage = await retry(() => uploadImageFromUrl(aiImageUrl), 2, 3000)
      console.log('✅ Image uploaded:', uploadedImage._id)
    } catch (err: any) {
      console.log('⚠️  Image upload failed:', err?.message)
      console.log('   Continuing without image...')
    }

    // --------------------------
    // STEP 5: Upload to Sanity
    // --------------------------
    console.log('\n[5/5] Uploading blog to Sanity...')

    const safeTitle = aiBlog.title || topic
    const safeCategory = aiBlog.category || 'Web Development'
    const safeTags = aiBlog.tags?.length ? aiBlog.tags : ['web development']

    // Slug: title-randomid (no duplicate slugs)
    const slugBase = slugify(safeTitle, {lower: true, strict: true})
    const slugSuffix = crypto.randomUUID().split('-')[0]
    const finalSlug = `${slugBase}-${slugSuffix}`

    const doc = await client.create({
      _type: 'blog',

      title: safeTitle,

      slug: {
        _type: 'slug',
        current: finalSlug,
      },

      excerpt: aiBlog.excerpt || 'Read this modern developer blog.',

      category: safeCategory,

      tags: safeTags,

      publishedAt: new Date().toISOString(),

      author: {
        name: 'Star Works',
        role: 'Web Developer',
      },

      // Image (optional — skip if upload failed)
      mainImage: uploadedImage
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: uploadedImage._id,
            },
          }
        : undefined,

      // SEO fields
      seo: {
        _type: 'seo',
        metaTitle: aiBlog.seoTitle || safeTitle.substring(0, 60),
        metaDescription: aiBlog.seoDescription || aiBlog.excerpt || 'AI generated developer blog.',
        keywords: safeTags.join(', '),
        twitterTitle: aiBlog.seoTitle || safeTitle.substring(0, 60),
        twitterDescription:
          aiBlog.seoDescription || aiBlog.excerpt || 'AI generated developer blog.',
      },

      // Markdown content
      content: aiBlog.content,

      aiGenerated: true,
    })

    console.log('✅ Blog uploaded successfully!')
    console.log('   Sanity ID:', doc._id)
    console.log('   Slug:', finalSlug)
  } catch (error: any) {
    console.log('\n❌ uploadBlog failed:')
    console.log('   Message:', error?.message)
  }
}

// ==============================
// UPLOAD MULTIPLE BLOGS
// ==============================
async function uploadMultipleBlogs(count = 6): Promise<void> {
  console.log(`\n🚀 Starting upload of ${count} blogs...`)
  console.log(`   Time: ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})} IST`)

  let successCount = 0

  for (let i = 0; i < count; i++) {
    console.log(`\n${'='.repeat(50)}`)
    console.log(`Blog ${i + 1} of ${count}`)
    console.log('='.repeat(50))

    await uploadBlog()
    successCount++

    // Wait between blogs (rate limit protection)
    if (i < count - 1) {
      const waitSec = 15
      console.log(`\n⏳ Waiting ${waitSec}s before next blog...`)
      await sleep(waitSec * 1000)
    }
  }

  console.log(`\n${'='.repeat(50)}`)
  console.log(`🎉 Done! Uploaded ${successCount} blog(s)`)
  console.log('='.repeat(50))
}

// Run
uploadMultipleBlogs(6)
