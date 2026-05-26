import cron from 'node-cron'

import {exec} from 'child_process'

// DAILY 9 AM
cron.schedule('0 9 * * *', () => {
  console.log('Generating Blogs...')

  exec('npx tsx gemini/uploadBlog.ts', (error, stdout, stderr) => {
    if (error) {
      console.log(error)

      return
    }

    console.log(stdout)

    if (stderr) {
      console.log(stderr)
    }
  })
})

console.log('Cron Started...')
