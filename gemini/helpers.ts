// ==============================
// RETRY — API fail ho to dubara try
// ==============================
export async function retry<T>(fn: () => Promise<T>, attempts = 3, delayMs = 3000): Promise<T> {
  let lastError: any

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (error: any) {
      lastError = error
      console.log(`Attempt ${i + 1}/${attempts} failed: ${error?.message}`)

      if (i < attempts - 1) {
        console.log(`Retrying in ${delayMs / 1000}s...`)
        await sleep(delayMs)
      }
    }
  }

  throw new Error(`All ${attempts} attempts failed. Last error: ${lastError?.message}`)
}

// ==============================
// SLEEP — wait karo ms milliseconds
// ==============================
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ==============================
// SAFE JSON PARSE — crash nahi hoga
// ==============================
export function safeParseJSON<T = any>(text: string): T | null {
  try {
    // Remove markdown code fences if model added them
    const cleaned = text
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/```\s*$/i, '')
      .trim()

    return JSON.parse(cleaned) as T
  } catch {
    return null
  }
}
