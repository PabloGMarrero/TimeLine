import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'

import card from '../routes/card'

const start = () => {
    mongoose.connect('mongodb://ds139970.mlab.com:39970/time-line')

    const app = express()
    app.use(morgan('combined'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())


    app.use(card)

    app.use((err, req, res) => {
        const { message, stack } = err
        res.status(500).send({ status: 'error', message, stack })
    })
    return app
}

export default start
