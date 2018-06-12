import { Schema, model, } from 'mongoose'

const cardSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true }
})

const cardModel = model('Card', cardSchema)

export const createCard = (name, category, year, img) => cardModel.create(
    {
        name,
        category,
        year,
        img
    }
)
const toObjectId = id => Schema.Types.ObjectId.createFromHexString(String(id))

export const searchByName = name => cardModel.findOne({ name });

export const searchById = id => cardModel.findById(id)

export const edit = (id, card) => cardModel.findOneAndUpdate({ _id: toObjectId(id) }, card)

export const deleteCard = id => cardModel.findOneAndRemove({ _id: toObjectId(id) })

