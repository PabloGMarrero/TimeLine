var mongoose = require('mongoose')

var ObjectId = mongoose.Schema.Types.ObjectId

var CardListSchema = new mongoose.Schema({
    cards: [{ Objectid, ref: 'card' }]
})

var cardListModel = mongoose.model('cardList', CardListSchema)

export const fetchCards = () => cardListModel.find({});

export const fetchCardsByName = (name) => find({ name: name })

export const fetchCardsByCategory = (category) => find({ category: category })

export const fetchCardsByYear = (year) => find({ year: year })