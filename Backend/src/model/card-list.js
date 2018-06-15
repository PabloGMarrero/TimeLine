// var mongoose = require('mongoose')

import { Schema, model, } from 'mongoose'


const { Types } = Schema

const { ObjectId } = Types

const CardListSchema = new Schema({
    cards: [{ ObjectId, ref: 'card' }]
})

const cardListModel = model('cardList', CardListSchema)

export const fetchCards = () => cardListModel.find({});

export const fetchCardsByName = name => cardListModel.find({ name })

export const fetchCardsByCategory = category => cardListModel.find({ category })

export const fetchCardsByYear = year => cardListModel.find({ year })
