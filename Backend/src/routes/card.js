import { Router } from 'express'
import mongoose from 'mongoose'
import './../model/card'

const router = Router()
const Cardmodel = mongoose.model('Card')
const ok = { status: 'ok' }
router.get('/cards', async (req, res) => res.send(...ok, await Cardmodel.find({})))

router.post('/cards', async (req, res) => {
    const item = req.body
    const data = await Cardmodel.create([item])
    res.send({
        ...ok,
        data,
    })
})


export default router
