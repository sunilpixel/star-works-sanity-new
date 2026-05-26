import 'dotenv/config'

import slugify from 'slugify'

import {createClient} from '@sanity/client'

import {generateBlog} from './generateBlog'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

  token: process.env.SANITY_API_TOKEN,

  useCdn: false,
})

async function uploadBlog() {
  try {
    const blogs = [
      {
        topic: 'Best React Libraries in 2026',

        category: 'Frontend Development',
      },

      {
        topic: 'Top Next.js Features Developers Should Use',

        category: 'Web Development',
      },

      {
        topic: 'Best GSAP Animation Techniques',

        category: 'Frontend Animation',
      },

      {
        topic: 'How AI is Transforming Programming',

        category: 'AI Development',
      },

      {
        topic: 'TypeScript Best Practices',

        category: 'Programming',
      },

      {
        topic: 'Best Tailwind CSS Tips',

        category: 'Frontend Development',
      },
    ]

    // RANDOM BLOG
    const blogItem = blogs[Math.floor(Math.random() * blogs.length)]

    console.log(`Generating Blog: ${blogItem.topic}`)

    const aiBlog = await generateBlog({
      topic: blogItem.topic,

      category: blogItem.category,
    })

    console.log(aiBlog)

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

      category: aiBlog.category,

      tags: aiBlog.tags,

      publishedAt: new Date().toISOString(),

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
