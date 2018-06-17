import { partial, flip, times, equals, isNil, reverse, find } from 'ramda'

export const slot = (cardkey, index, key) => ({
    cardkey,
    index,
    key: key ? key : index
})

export const empty = (size) => reverse(times(() => slot(undefined, --size), size))

export const get = (slot, cards) => find(partial(flip(includes), [slot]), cards)

export const set = ({ key }, { index }) => slot(key, index)

export const clear = ({ index }) => slot(undefined, index)

export const isEmpty = ({ cardkey }) => isNil(cardkey)

export const includes = ({ key }, { cardkey }) => equals(key, cardkey)

export const cardkeyOf = ({ cardkey }) => cardkey

export const indexOf = ({ index }) => index

export const keyOf = ({ key }) => key

export const replace = (cardkey, { index, key }) => slot(cardkey, index, key)

