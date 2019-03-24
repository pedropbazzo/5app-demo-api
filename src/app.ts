import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import * as express from 'express'
import * as expressValidation from 'express-validation'

import { config } from './config'
import { routes } from './routes'

// Instantiate express
export const app: express.Application = express()

// CORS (unsafe)
app.use(cors())

// Use JSON and limit body size
app.use(bodyParser.json({
  limit: config.bodyLimit,
}))

// Setup routes
app.use('/v1', routes)

// Set strict mode for all endpoints
expressValidation.options({
  allowUnknownBody: false,
})

// Validation handler
app.use((err, req, res, next) => {
  res.status(400).json(err)
  next()
})
