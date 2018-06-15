import { Router } from 'express'
import { createCard } from '../model/card'

// const Card = mongoose.model('card')

const router = Router()

const ok = { status: 'ok' }

router.post('/create', async (req, res) => {
    const item = req.body
    const data = await createCard([item])
    res.send({
        ...ok,
        data,
    })
})

export default router
