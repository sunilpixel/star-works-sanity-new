import 'dotenv/config'

import slugify from 'slugify'

import {createClient} from '@sanity/client'

import {generateTopic} from './generateTopic'

import {generateBlog} from './generateBlog'

import {uploadImageFromUrl} from './uploadImage'

import {retry, sleep} from './helpers'

import {styles, scenes, moods, cameraAngles, colorThemes, environments} from './constants'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

  token: process.env.SANITY_API_TOKEN,

  useCdn: false,
})

async function uploadBlog() {
  try {
    console.log('Generating Topic...')

    const topic = await retry(() => generateTopic())

    console.log('Topic:', topic)

    const aiBlog = await retry(() => generateBlog(topic || '', 'Web Development'))

    console.log(aiBlog)

    // =========================
    // VALIDATION
    // =========================
    if (!aiBlog?.title || !aiBlog?.content) {
      console.log('Invalid Blog Data')

      return
    }

    if (aiBlog.content.length < 500) {
      console.log('Content Too Short')

      return
    }

    // =========================
    // DUPLICATE CHECK
    // =========================
    const existing = await client.fetch(`*[_type == "blog" && title == $title][0]`, {
      title: aiBlog.title,
    })

    if (existing) {
      console.log('Duplicate Blog Skipped')

      return
    }

    const safeTitle = aiBlog.title || topic || 'blog'

    const safeCategory = aiBlog.category || 'Web Development'

    console.log({
      topic,
      title: safeTitle,
      category: safeCategory,
    })

    // =========================
    // RANDOM VALUES
    // =========================
    const randomStyle = styles[Math.floor(Math.random() * styles.length)]

    const randomScene = scenes[Math.floor(Math.random() * scenes.length)]

    const randomMood = moods[Math.floor(Math.random() * moods.length)]

    const randomAngle = cameraAngles[Math.floor(Math.random() * cameraAngles.length)]

    const randomColor = colorThemes[Math.floor(Math.random() * colorThemes.length)]

    const randomEnvironment = environments[Math.floor(Math.random() * environments.length)]

    // =========================
    // IMAGE PROMPT
    // =========================
    const imagePrompt = encodeURIComponent(`
${topic},

${randomStyle},

${randomScene},

${randomMood},

${randomAngle},

${randomColor},

${randomEnvironment},

completely unique composition,

totally different layout,

creative framing,

modern artwork,

high detail,

dynamic lighting,

ultra realistic,

4k
`)

    // BETTER RANDOM SEED
    const randomSeed = Math.floor(Math.random() * 1000000)

    const aiImageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}?seed=${randomSeed}`

    console.log('Generating AI Image...')

    console.log(aiImageUrl)

    // =========================
    // IMAGE UPLOAD
    // =========================
    let uploadedImage = null

    try {
      uploadedImage = await retry(() => uploadImageFromUrl(aiImageUrl))

      console.log('Image Uploaded')
    } catch {
      console.log('Image Upload Failed')
    }

    // =========================
    // CREATE BLOG
    // =========================
    const response = await client.create({
      _type: 'blog',

      title: safeTitle,

      slug: {
        _type: 'slug',

        current:
          slugify(safeTitle, {
            lower: true,
            strict: true,
          }) +
          '-' +
          crypto.randomUUID(),
      },

      excerpt: aiBlog.excerpt || 'Read this modern developer blog.',

      category: safeCategory,

      tags: aiBlog.tags || ['web development'],

      publishedAt: new Date().toISOString(),

      author: {
        name: 'Star Works',

        role: 'Web Developer',
      },

      // IMAGE
      mainImage: uploadedImage
        ? {
            _type: 'image',

            asset: {
              _type: 'reference',

              _ref: uploadedImage._id,
            },
          }
        : undefined,

      // SEO
      seo: {
        _type: 'seo',

        metaTitle: aiBlog.seoTitle || safeTitle,

        metaDescription: aiBlog.seoDescription || 'AI generated developer blog.',

        keywords: aiBlog.tags?.join(', ') || 'web development',

        twitterTitle: aiBlog.seoTitle || safeTitle,

        twitterDescription: aiBlog.seoDescription || 'AI generated developer blog.',
      },

      content: aiBlog.content || 'No content generated',

      aiGenerated: true,
    })

    console.log('Blog Uploaded Successfully')

    console.log(response)
  } catch (error: any) {
    console.log({
      message: error?.message,
      stack: error?.stack,
    })
  }
}

// =========================
// MULTIPLE BLOGS
// =========================
async function uploadMultipleBlogs(count = 6) {
  for (let i = 0; i < count; i++) {
    console.log(`Uploading Blog ${i + 1}...`)

    await uploadBlog()

    console.log(`Blog ${i + 1} Uploaded`)

    // RATE LIMIT PROTECTION
    await sleep(10000)
  }

  console.log('All Blogs Uploaded')
}

uploadMultipleBlogs(6)
