import 'dotenv/config'
import cron from 'node-cron'
import {exec} from 'child_process'

// Runs every day at 9:00 AM IST
cron.schedule(
  '0 9 * * *',
  () => {
    const time = new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})
    console.log(`\n[${time}] Cron triggered — starting blog generation...`)

    exec(
      'npx tsx gemini/uploadBlog.ts',
      {
        timeout: 10 * 60 * 1000, // 10 minute timeout
      },
      (error, stdout, stderr) => {
        if (error) {
          console.log('❌ Cron error:', error.message)
          return
        }

        if (stdout) console.log(stdout)
        if (stderr) console.log('stderr:', stderr)

        console.log('✅ Cron job completed')
      },
    )
  },
  {
    timezone: 'Asia/Kolkata',
  },
)

console.log('✅ Cron started — blogs generate daily at 9:00 AM IST')
