import mongoose from 'mongoose'

const { Schema } = mongoose

const matchSchema = new Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    players: { type: Array, required: true },
    cards: { type: Array, required: true }
})

mongoose.model('Match', matchSchema)
