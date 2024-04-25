import { Router } from 'express'
import { router as routerUrl } from './url'

const router = Router()

router.use('/url', routerUrl)

export { router };