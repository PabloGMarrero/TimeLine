import { Router } from 'express'
import mongoose from 'mongoose'
import './../model/card'

const router = Router()
const Cardmodel = mongoose.model('Card')

router.get('/cards', async (req, res) => res.send(await Cardmodel.find({})))

export default router
