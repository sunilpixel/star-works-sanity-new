// ==============================
// TOPIC PROMPT
// ==============================
export const TOPIC_PROMPT = (category: string) => `
You are a blog topic generator.

Generate ONE unique, highly specific blog topic for the category: "${category}"

Category rules:
- Web Development: JavaScript, TypeScript, React, Next.js, Node.js, CSS, APIs, Web Performance
- Development: Software architecture, DevOps, Git, Docker, databases, backend systems
- Marketing: Digital marketing, SEO, content strategy, social media, email marketing, growth hacking
- Freelancing: Client management, pricing, contracts, remote work, portfolio building, finding clients
- Designing: UI/UX, Figma, design systems, typography, color theory, user research

Rules:
- Topic MUST match the category "${category}" — do NOT write about other categories
- Topic must be specific — NOT generic
- Beginner to intermediate level
- Do NOT add numbering, bullet points, or quotes
- Return ONLY the plain topic string — nothing else

Good examples for Freelancing:
How to Set Your Freelance Rate Without Undercharging Clients
Building a Freelance Portfolio That Wins High-Paying Clients
How to Write a Freelance Contract That Protects You

Good examples for Marketing:
How to Build an Email List from Scratch in 2024
SEO Content Strategy for Small Business Blogs
`

// ==============================
// BLOG PROMPT
// ==============================
export const BLOG_PROMPT = (topic: string, category: string) => `
You are an expert senior SEO content writer for a modern tech blog.

Write a highly engaging, human-like, SEO optimized blog post.

TOPIC: "${topic}"
CATEGORY: "${category}"

==============================
CRITICAL RULE — READ FIRST
==============================

You MUST return "${category}" as the category in your JSON.
Do NOT change it. Do NOT use "Web Development" unless category is "Web Development".
The category field MUST be EXACTLY: "${category}"

==============================
BLOG REQUIREMENTS
==============================

1. Write 1500-2000 words.

2. Use proper MARKDOWN formatting:
   - # Main Title
   - ## Section Headings
   - ### Sub Sections
   - Bullet lists with -
   - **Bold** for important terms
   - Tables where useful
   - Code blocks with language name

3. Writing Style:
   - Conversational, human sounding
   - Beginner friendly
   - Explain WHY not just HOW

4. STRICTLY AVOID these phrases:
   - "In today's digital world"
   - "Delve into"
   - "It's worth noting"
   - "Leverage" / "Unlock" / "Game changer"
   - "In conclusion" (use "## Wrapping Up" instead)

5. Blog structure must include:
   - Strong introduction (no heading, just start writing)
   - Multiple ## sections
   - At least one real working example
   - ## Frequently Asked Questions (3-5 questions)
   - ## Wrapping Up (conclusion)

==============================
CODE BLOCK RULES
==============================

ALWAYS use fenced code blocks with language name:

\`\`\`typescript
const name: string = "hello"
\`\`\`

\`\`\`bash
npm install react
\`\`\`

NEVER write raw code without fences.

==============================
OUTPUT FORMAT — CRITICAL
==============================

Return ONLY a single valid JSON object.
- No text before or after the JSON
- Do NOT wrap in \`\`\`json blocks
- Properly escape all newlines as \\n inside the content string
- Properly escape all quotes inside the content string

{
  "title": "Full SEO optimized title here",
  "excerpt": "2-3 sentence compelling summary",
  "content": "Full markdown blog post here, properly JSON escaped",
  "seoTitle": "SEO title under 60 characters",
  "seoDescription": "Meta description under 160 characters",
  "category": "${category}",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}
`
