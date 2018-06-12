const express = require('express')
const mongoose = require('mongoose')
const Card = require('./moongose/card')

const localHostUri = "mongodb://ds139970.mlab.com:39970/time-line"

mongoose.connection.openUri(localHostUri, (err) => {
    if (err) {
        console.log(err.message)
        console.log(err)
    }
    else {
        console.log('Connected to MongoDb')
    }
})

const app = express()
const port = process.env.PORT || 5000

app.get('/', function (req, res) {
    res.send('Hello World!')
})


var router = express.Router()

router.route('/cards')

    .post(function (req, res) {
        Card.createCard("name", "category", 1990, "img")
    })

app.use('/api', router)



app.listen(port, () => console.log(`Listening on port ${port}`))