import * as joi from 'joi'

export const LogoSchema = joi.object({
  size: joi.string().min(1).max(100).required(),
  url: joi.string().min(1).max(500).required(),
})
