import 'dotenv/config'

import slugify from 'slugify'

import OpenAI from 'openai'

import {createClient} from '@sanity/client'

// =========================
// OPENROUTER AI
// =========================
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',

  apiKey: process.env.OPENROUTER_API_KEY,
})

// =========================
// SANITY CLIENT
// =========================
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

  token: process.env.SANITY_API_TOKEN,

  useCdn: false,
})

// =========================
// GENERATE AI TOPIC
// =========================
async function generateTopic() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',

      messages: [
        {
          role: 'user',

          content: `
Generate ONE unique modern coding blog topic.

Rules:
- SEO friendly
- Trending
- Developer focused
- Future technology related
- Web development related
- Beginner friendly
- Return ONLY the title
`,
        },
      ],
    })

    return completion.choices[0].message.content?.trim()
  } catch (error) {
    console.log('Topic Error:', error)

    throw error
  }
}

// =========================
// GENERATE BLOG
// =========================
async function generateBlog(topic: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',

      messages: [
        {
          role: 'user',

          content: `
Write a professional coding related SEO blog.

Topic: ${topic}

Requirements:
- Developer friendly tone
- SEO optimized
- H1, H2, H3 headings
- Beginner friendly
- Modern web development style
- Include coding examples if needed
- 1000+ words
- Add conclusion
- Add FAQ section

Return ONLY valid JSON:

{
  "title": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "category": "",
  "tags": []
}
`,
        },
      ],
    })

    const text = completion.choices[0].message.content

    const cleaned = text
      ?.replace(/```json/g, '')
      ?.replace(/```/g, '')
      ?.trim()

    return JSON.parse(cleaned || '{}')
  } catch (error) {
    console.log('Blog Error:', error)

    throw error
  }
}

// =========================
// UPLOAD IMAGE TO SANITY
// =========================
async function uploadImageFromUrl(imageUrl: string) {
  const response = await fetch(imageUrl)

  const arrayBuffer = await response.arrayBuffer()

  const buffer = Buffer.from(arrayBuffer)

  return await client.assets.upload('image', buffer, {
    filename: 'blog-image.jpg',
  })
}

// =========================
// MAIN FUNCTION
// =========================
async function uploadBlog() {
  try {
    // =========================
    // GENERATE AI TOPIC
    // =========================
    console.log('Generating AI Topic...')

    const topic = await generateTopic()

    console.log('Topic:', topic)

    // =========================
    // GENERATE BLOG
    // =========================
    console.log('Generating AI Blog...')

    const aiBlog = await generateBlog(topic || '')

    console.log(aiBlog)

    // =========================
    // GENERATE AI IMAGE
    // =========================
    const imagePrompt = encodeURIComponent(`
${topic},
modern web development,
developer workspace,
futuristic coding setup,
cinematic lighting,
ultra realistic,
4k
`)

    const aiImageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}`

    console.log('Generating AI Image...')

    console.log(aiImageUrl)

    // =========================
    // UPLOAD IMAGE
    // =========================
    const uploadedImage = await uploadImageFromUrl(aiImageUrl)

    console.log('Image Uploaded')

    // =========================
    // CREATE BLOG
    // =========================
    const response = await client.create({
      _type: 'blog',

      title: aiBlog.title,

      slug: {
        _type: 'slug',

        current:
          slugify(aiBlog.title, {
            lower: true,
          }) +
          '-' +
          Date.now(),
      },

      excerpt: aiBlog.excerpt,

      category: aiBlog.category || 'Web Development',

      tags: aiBlog.tags || [],

      publishedAt: new Date().toISOString(),

      // AUTHOR
      author: {
        name: 'Star Works',

        role: 'Web Developer',
      },

      // IMAGE
      mainImage: {
        _type: 'image',

        asset: {
          _type: 'reference',

          _ref: uploadedImage._id,
        },
      },

      // SEO
      seo: {
        _type: 'seo',

        metaTitle: aiBlog.seoTitle,

        metaDescription: aiBlog.seoDescription,

        keywords: aiBlog.tags?.join(', '),

        twitterTitle: aiBlog.seoTitle,

        twitterDescription: aiBlog.seoDescription,
      },

      content: aiBlog.content,
    })

    console.log('Blog Uploaded Successfully')

    console.log(response)
  } catch (error) {
    console.log('Upload Error:', error)
  }
}

uploadBlog()
