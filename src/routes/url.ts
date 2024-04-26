import { Router } from 'express'
import { deletUrl, getUrl, getUrls, postUrl } from '../controllers/url'

const router = Router()

router.get('/:id', getUrl)

router.get('/', getUrls)

router.post('/', postUrl)

router.delete('/:id', deletUrl)

export { router }