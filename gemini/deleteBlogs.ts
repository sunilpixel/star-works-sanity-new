import 'dotenv/config'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

async function deleteAllBlogs(): Promise<void> {
  try {
    console.log('Fetching all blogs...')

    const blogs = await client.fetch(`*[_type == "blog"]{ _id, title }`)

    console.log(`Found ${blogs.length} blogs`)

    if (blogs.length === 0) {
      console.log('No blogs to delete')
      return
    }

    // Batch delete using transaction (much faster than one by one)
    const transaction = client.transaction()

    for (const blog of blogs) {
      transaction.delete(blog._id)
    }

    await transaction.commit()

    console.log(`✅ Deleted ${blogs.length} blogs successfully`)
  } catch (error: any) {
    console.log('❌ Delete failed:', error?.message)
  }
}

deleteAllBlogs()
