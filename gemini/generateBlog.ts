import OpenAI from 'openai'
import {BLOG_PROMPT} from './prompts'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
})

export async function generateBlog(topic: string, category: string) {
  const completion = await client.chat.completions.create({
    model: 'google/gemini-2.0-flash',

    messages: [
      {
        role: 'user',
        content: BLOG_PROMPT(topic, category),
      },
    ],
  })

  return completion.choices[0].message.content
}
