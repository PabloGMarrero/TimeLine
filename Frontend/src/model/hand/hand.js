import { pick } from 'shuffle-array'
import { partial, nth, complement, update, any, all, find, filter } from 'ramda'
import { get as getS, set as setS, empty as emptyS, isEmpty as isEmptyS, clear as clearS, includes as includesS, indexOf } from '../slot/slot'

export const empty = (size, owner) => ({
    owner,
    slots: emptyS(size)
})

export const get = (index, { slots }, cards) => getS(nth(index, slots), cards)

const set = (card, slot, { slots, owner }) => ({
    owner,
    slots: update(indexOf(slot), setS(card, slot), slots)
})

const clear = (slot, { slots, owner }) => ({
    owner,
    slots: update(indexOf(slot), clearS(slot), slots)
})

const slots = ({ slots }) => slots

export const isEmpty = ({ slots }) => all(isEmptyS, slots)

export const includes = (card, { slots }) => any(partial(includesS, [card]), slots)

export const draw = (card, hand) => set(card, find(isEmptyS, slots(hand)), hand)

export const remove = (card, hand) => clear(find(partial(includesS, [card]), slots(hand)), hand)

export const random = ({ slots }, cards) => getS(pick(filter(complement(isEmptyS), slots)), cards)