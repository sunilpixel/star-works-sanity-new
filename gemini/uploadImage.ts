import 'dotenv/config'
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

export async function uploadImageFromUrl(imageUrl: string) {
  const response = await fetch(imageUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  })

  if (!response.ok) {
    throw new Error(`Image fetch failed: ${response.status} ${response.statusText}`)
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg'
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // Validate image size (min 1KB)
  if (buffer.length < 1024) {
    throw new Error('Image too small — likely invalid response')
  }

  const uploaded = await client.assets.upload('image', buffer, {
    filename: `blog-image-${Date.now()}.jpg`,
    contentType,
  })

  return uploaded
}
