import { times } from 'ramda'

const slot = (card, index) => ({
        card,
        index,
        key: index
})

export const createEmptySlots = (size) => times(() => slot(undefined, --size), size).reverse()

export const clear = ({ index }) => slot(undefined, index)

export const set = (card, { index }) => slot(card.key, index)

export const get = ({ card }, cards) => cards.find(_ => _.key === card)

export const isEmpty = ({ card }) => card === undefined

export const includes = ({ key }, { card }) => key === card