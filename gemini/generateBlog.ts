import OpenAI from 'openai'

import {BLOG_PROMPT} from './prompts'

import {safeParseJSON} from './helpers'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',

  apiKey: process.env.OPENROUTER_API_KEY,
})

export async function generateBlog(topic: string, category: string) {
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

  const text = completion.choices[0].message.content

  const cleaned = text
    ?.replace(/```json/g, '')
    ?.replace(/```/g, '')
    ?.trim()

  const parsed = safeParseJSON(cleaned || '')

  if (!parsed) {
    return {
      title: topic,
      excerpt: 'AI generated blog',
      content: cleaned || 'No content generated',
      seoTitle: topic,
      seoDescription: 'AI generated blog',
      category,
      tags: ['web development'],
    }
  }

  return parsed
}
