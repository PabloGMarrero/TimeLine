import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'

import card from '../routes/card'
import './../model/card'

const start = () => {

    if (!process.env.MONGO_URL) {
        throw new Error('No mongo url configured, set MONGO_URL env var')
    }

    mongoose.connect(process.env.MONGO_URL)

    const app = express()
    app.use(morgan('combined'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(card)

    // app.use((err, req, res) => {
    //     const { message, stack } = err
    //     res.status(500).send({ status: 'error', message, stack })
    // })
    app.get('/', (req, res) => {
        res.send('Welcome to Timeline API REST')
    })
    return app
}

export default start
