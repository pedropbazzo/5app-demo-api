import { Router } from 'express'

import { userLogosRouter } from './user-logos'

export const routes: Router = Router()
routes.use('/user-logos', userLogosRouter)
