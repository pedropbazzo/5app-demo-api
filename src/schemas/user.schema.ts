import * as joi from 'joi'
import { LogoSchema } from './logo.schema'

export const UserSchema = joi.object({
  count: joi.number().min(0).required(),
  logos: joi.array().items(LogoSchema),
  name: joi.string().min(1).max(100).required(),
})
