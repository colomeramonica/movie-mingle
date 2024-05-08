import express from 'express'
import router from './router'

const app = express()
const port = process.env.ENV_PORT

app.use(express.json())
app.use('/', router)

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting the server:', err)
  } else {
    console.log(`🚀 Server running on http://localhost:${port}`)
  }
})
