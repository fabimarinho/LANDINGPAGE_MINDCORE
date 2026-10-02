import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { rateLimit } from 'express-rate-limit'
import { contactRouter } from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Muitas solicitações. Tente novamente mais tarde.' },
})

app.set('trust proxy', 1)

const allowedOrigins = (
  process.env.CORS_ORIGIN ||
  'http://localhost:5173,http://127.0.0.1:5173'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }
      callback(null, false)
    },
  }),
)
app.use(express.json({ limit: '10kb' }))
app.use((err, _req, res, next) => {
  if (err?.type === 'entity.too.large') {
    res.status(413).json({ error: 'Corpo da solicitação muito grande.' })
    return
  }
  if (err instanceof SyntaxError) {
    res.status(400).json({ error: 'JSON inválido.' })
    return
  }
  next(err)
})

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'mindcore-api' })
})

app.use('/api/contact', contactRateLimit, contactRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MindCore API rodando na porta ${PORT}`)
})
