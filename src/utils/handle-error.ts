import { Response } from 'express'
import { IError } from '../models/error.model'

export const handleError = (rawError: Error, res: Response, status = 500) => {
  const statusText =
    !!rawError && typeof rawError.toString === 'function'
      ? rawError.toString() : 'Error: unexpected failure'
  const error: IError = {
    status,
    statusText,
  }
  return res.status(error.status).json(error)
}
