import nodemailer from 'nodemailer'

// ==============================
// SLEEP — wait karo ms milliseconds
// ==============================
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

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
// SAFE JSON PARSE — crash nahi hoga
// ==============================
export function safeParseJSON<T = any>(text: string): T | null {
  try {
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

// ==============================
// SEND ALERT EMAIL
// ==============================
export async function sendAlertEmail(subject: string, message: string): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ALERT_EMAIL_FROM,
        pass: process.env.ALERT_EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.ALERT_EMAIL_FROM,
      to: process.env.ALERT_EMAIL_TO,
      subject: `🚨 Blog Generator Alert: ${subject}`,
      text: message,
      html: `<h2>🚨 Blog Generator Alert</h2><p>${message}</p><p>Time: ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})} IST</p>`,
    })

    console.log('📧 Alert email sent!')
  } catch (err: any) {
    console.log('⚠️ Email send failed:', err?.message)
  }
}

// ==============================
// RETRY WITH ALERT
// ==============================
export async function retryWithAlert<T>(
  fn: () => Promise<T>,
  label: string,
  attempts = 3,
  delayMs = 3000,
): Promise<T> {
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

  const errorMessage = `
    ❌ ${label} failed after ${attempts} attempts.
    Error: ${lastError?.message}
    Time: ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})} IST
  `

  console.log(errorMessage)
  await sendAlertEmail(`${label} Failed`, errorMessage)

  throw new Error(`All ${attempts} attempts failed. Last error: ${lastError?.message}`)
}
