import express from 'express'
import router from './router'

const app = express()
const port = process.env.port || 3333
app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
})
