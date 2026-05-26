import OpenAI from 'openai'

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',

  apiKey: process.env.OPENROUTER_API_KEY,
})

type GenerateBlogProps = {
  topic: string
  category: string
}

export async function generateBlog({topic, category}: GenerateBlogProps) {
  try {
    const completion = await client.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',

      messages: [
        {
          role: 'user',

          content: `
Write a professional coding related SEO blog.

Topic: ${topic}

Category: ${category}

Requirements:
- Developer friendly tone
- SEO optimized
- H1, H2, H3 headings
- Beginner friendly
- Modern web development style
- Include coding examples if needed
- 1000+ words
- Add conclusion
- Add FAQ section

Return ONLY valid JSON:

{
  "title": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "category": "",
  "tags": []
}
`,
        },
      ],
    })

    const text = completion.choices[0].message.content

    const cleaned = text
      ?.replace(/```json/g, '')
      ?.replace(/```/g, '')
      ?.trim()

    return JSON.parse(cleaned || '{}')
  } catch (error) {
    console.log('AI Error:', error)

    throw error
  }
}
