import 'dotenv/config'
import OpenAI from 'openai'
import {TOPIC_PROMPT} from './prompts'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
})

export async function generateTopic(randomCategory: string): Promise<string> {
  const completion = await client.chat.completions.create({
    model: 'openai/gpt-3.5-turbo',
    temperature: 1.0,
    max_tokens: 100,
    messages: [
      {
        role: 'user',
        content: TOPIC_PROMPT(randomCategory), // ← yahan randomCategory pass karo
      },
    ],
  })

  const text = completion.choices[0]?.message?.content?.trim()

  if (!text) {
    throw new Error('Empty topic generated')
  }

  const cleaned = text
    .replace(/^["'\d.\-\s]+/, '')
    .replace(/["']$/, '')
    .trim()

  return cleaned
}
