var mongoose = require('mongoose')

var cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true }
})

var cardModel = mongoose.model('card', cardSchema)

export const createCard = (name, category, year, img) => cardModel.create(
    new CardModel({
        name,
        category,
        year,
        img
    })
)

export const searchByName = (name) => cardModel.findOne({ name: name });

export const searchById = (id) => cardModel.findById(id)

export const edit = (id, card) => cardModel.findOneAndUpdate({ _id: this.toObjectId(id) }, card)

export const deleteCard = (id) => cardModel.findOneAndRemove({ _id: this.toObjectId(id) })

const toObjectId = (id) => Types.ObjectId.createFromHexString(String(id))
