import OpenAI from 'openai'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',

  apiKey: process.env.OPENROUTER_API_KEY,
})

export async function generateTopic() {
  const completion = await client.chat.completions.create({
    model: 'openai/gpt-3.5-turbo',

    temperature: 1,

    max_tokens: 100,

    messages: [
      {
        role: 'user',

        content: `
Generate ONE unique modern coding blog topic.

Rules:
- SEO friendly
- Trending
- Developer focused
- Beginner friendly
- Return ONLY the title
`,
      },
    ],
  })

  return completion.choices[0].message.content?.trim()
}
