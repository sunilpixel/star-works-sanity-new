import 'dotenv/config'
import OpenAI from 'openai'
import {BLOG_PROMPT} from './prompts'
import {safeParseJSON} from './helpers'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
})

interface BlogData {
  title: string
  excerpt: string
  content: string
  seoTitle: string
  seoDescription: string
  category: string
  tags: string[]
}

export async function generateBlog(topic: string, category: string): Promise<BlogData> {
  const completion = await client.chat.completions.create({
    model: 'openai/gpt-3.5-turbo',
    temperature: 0.9,
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: BLOG_PROMPT(topic, category),
      },
    ],
  })

  const text = completion.choices[0]?.message?.content

  if (!text) {
    throw new Error('Empty response from API')
  }

  const parsed = safeParseJSON<BlogData>(text)

  if (parsed && parsed.title && parsed.content) {
    parsed.category = category // ← AI jo bhi return kare, hum force override karenge
    return parsed
  }

  console.log('JSON parse failed, using fallback...')
  console.log('Raw response preview:', text.substring(0, 300))

  return {
    title: topic,
    excerpt: `A deep dive into ${category}.`,
    content: text,
    seoTitle: topic.substring(0, 60),
    seoDescription: `Learn about ${topic} in this detailed guide.`,
    category, // ← correct
    tags: [category.toLowerCase(), topic.toLowerCase().split(' ')[0]],
  }
}
