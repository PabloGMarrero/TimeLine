import React from 'react'
const ramda = require('ramda');

export const slot = (positionSlot) => ({
        card: undefined,
        index: positionSlot
})

export const addCard = (slot, card) => slot.card = card

export const removeCard = (slot) => slot && (slot.card = undefined)

export const isEmpty = (slot) => slot.card === undefined

export const createSlots = (cantSlots) => ramda.times(() => slot(--cantSlots), cantSlots).reverse()

export const getCardFromSlot = (slot) => slot.card

export const contains = (slot, card) => slot.card.key === card.key