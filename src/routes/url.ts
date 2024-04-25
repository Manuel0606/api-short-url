import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  // res.json({ message: 'Hello, world!' })
  res.send({data: 'Datos!'})
})

export { router }