import 'dotenv/config'

import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

async function deleteBlogs() {
  try {
    const blogs = await client.fetch(`*[_type == "blog"]{ _id }`)

    console.log(`Found ${blogs.length} blogs`)

    for (const blog of blogs) {
      await client.delete(blog._id)

      console.log(`Deleted: ${blog._id}`)
    }

    console.log('All blogs deleted successfully')
  } catch (error) {
    console.log(error)
  }
}

deleteBlogs()
