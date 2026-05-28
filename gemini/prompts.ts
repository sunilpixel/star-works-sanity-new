export const BLOG_PROMPT = (topic: string, category: string) => `
You are an expert senior SEO content writer for a modern tech blog.

Write a highly engaging, human-like, SEO optimized blog post.

TOPIC: "${topic}"

CATEGORY: "${category}"

==============================
BLOG REQUIREMENTS
==============================

1. Write 1500-2000 words.

2. Use proper MARKDOWN formatting:
- # Heading
- ## Sub Heading
- ### Small Heading
- Bullet lists
- Bold text
- Tables if needed
- Code blocks if needed

3. Writing Style:
- Conversational
- Human sounding
- Developer friendly
- Beginner friendly

4. STRICTLY AVOID AI WRITING STYLE:
NEVER use phrases like:
- "In today's digital world"
- "Delve into"
- "In conclusion"

5. Add:
- FAQ section
- Conclusion
- SEO optimized headings

==============================
VERY IMPORTANT MARKDOWN RULES
==============================

- Return ONLY markdown inside content
- Separate paragraphs properly
- Add blank line between headings and paragraphs

- NEVER use HTML tags
- NEVER use:
  <h1>
  <h2>
  <p>
  <div>
  <span>

- Use markdown headings ONLY

==============================
CODE BLOCK RULES
==============================

- ALWAYS wrap code in fenced markdown blocks
- ALWAYS specify language name
- NEVER write raw JSON directly
- NEVER write raw code directly

Correct JSON Example:

\`\`\`json
{
  "name": "My PWA"
}
\`\`\`

Correct JavaScript Example:

\`\`\`js
const app = "hello"
\`\`\`

Correct React Example:

\`\`\`tsx
export default function App() {
  return <h1>Hello</h1>
}
\`\`\`

Wrong Example:

{
  "name": "My PWA"
}

Wrong Example:

<h1>Heading</h1>

==============================
IMPORTANT JSON RULES
==============================

Return ONLY valid JSON.

{
  "title": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "category": "${category}",
  "tags": []
}
`
