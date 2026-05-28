import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,

  token: process.env.SANITY_API_TOKEN,

  useCdn: false,
})

export async function uploadImageFromUrl(imageUrl: string) {
  const response = await fetch(imageUrl)

  if (!response.ok) {
    throw new Error('Image Fetch Failed')
  }

  const arrayBuffer = await response.arrayBuffer()

  const buffer = Buffer.from(arrayBuffer)

  return await client.assets.upload('image', buffer, {
    filename: `blog-image-${Date.now()}.jpg`,
  })
}
