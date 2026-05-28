// =========================
// gemini/helpers.ts
// =========================

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function retry<T>(fn: () => Promise<T>, retries = 5, delay = 5000): Promise<T> {
  let lastError

  for (let i = 0; i < retries; i++) {
    try {
      return await fn()
    } catch (error: any) {
      lastError = error

      console.log(`Retry ${i + 1} Failed`)

      // =========================
      // RATE LIMIT
      // =========================
      if (error?.message?.includes('429') || error?.message?.includes('rate limit')) {
        console.log('Rate Limit Hit')

        await sleep(15000)

        continue
      }

      // =========================
      // TEMPORARY SERVER ERROR
      // =========================
      if (error?.message?.includes('503') || error?.message?.includes('502')) {
        console.log('Temporary Server Error')

        await sleep(10000)

        continue
      }

      // =========================
      // INVALID MODEL
      // =========================
      if (error?.message?.includes('not a valid model ID')) {
        console.log('Invalid Model ID')

        break
      }

      // =========================
      // DEFAULT RETRY DELAY
      // =========================
      await sleep(delay)
    }
  }

  throw lastError
}

export function safeParseJSON(text: string) {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}
