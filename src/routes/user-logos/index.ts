import { Request, Router } from 'express'
import * as validate from 'express-validation'
import * as joi from 'joi'

import { IUser } from '../../models/user.model'
import { UserSchema } from '../../schemas/user.schema'
import { handleError } from '../../utils/handle-error'
import { logoFromArray } from '../../utils/logo-from-array'

export const userLogosRouter = Router()

const UserLogosRequestSchema = joi.object({
  payload: joi.array().items(UserSchema).required(),
})

interface IUserLogosRequest extends Request {
  body: {
    payload: IUser[],
  }
}

userLogosRouter.post('/',
  validate({ body: UserLogosRequestSchema }),
  async (req: IUserLogosRequest, res) => {
    try {
      const { payload } = req.body
      const response = payload
        .filter((user) => user.count > 1)
        .map((user) => {
          const { count, logos, name } = user
          return {
            count,
            name,
            thumbnail: logoFromArray(logos),
          }
        })

      res.json({ response })
    } catch (error) {
      return handleError(error, res)
    }
  })
