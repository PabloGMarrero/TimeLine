import mongoose from 'mongoose'

const { Schema } = mongoose

const cardSchema = new Schema({
    year: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    url: { type: String, required: false }
})

mongoose.model('Card', cardSchema)
