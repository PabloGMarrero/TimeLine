import * as ramda from 'ramda'
import { generate as generateCardKey } from 'shortid'

const slot = (card, index, key = generateCardKey()) => ({
        card,
        index,
        key
})

export const empty = (index) => slot(undefined, index)

export const clear = (aSlot) => slot(undefined, aSlot.index, aSlot.key)

export const add = (card, slot) => slot(card, slot.index, slot.key)

export const get = (slot) => slot.card

export const update = (card, oldSlot) => slot(card, oldSlot.index, oldSlot.key)

export const isEmpty = (slot) => slot.card === undefined

export const contains = (card, slot) => slot.card.key === card.key

export const createEmptySlots = (size) => ramda.times(() => empty(--size), size).reverse()

const slotsWith = (fn, cards) => ramda.times(() => slot(fn(cards), cards.length), cards.length).reverse()

export const createSlotsWithCards = (slots) => slotsWith((cards => cards.pop()), slots)

export const updateSlots = (deck) => slotsWith((slots => slots.pop().card), deck)

export const isSelected = (slot) => slot.card.selected