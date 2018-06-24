import {
    partial,
    update,
    innerJoin,
    flip,
    map,
    any,
    find,
    all,
    nth
} from 'ramda'
import {
    get as getS,
    set as setSlot,
    empty as emptyS,
    clear as clearSlot,
    includes as includesS,
    isEmpty as isEmptyS,
    indexOf
} from '../slot/slot'

export const empty = size => emptyS(size)

export const get = (slot, cards) => getS(slot, cards)

const clear = (slot, board) => update(indexOf(slot), clearSlot(slot), board)

const slots = (board, cards) => innerJoin(flip(includesS), board, cards)

export const isEmpty = board => all(isEmptyS, board)

export const includes = (card, board) => any(partial(includesS, [card]), board)

export const cards = (board, cards) =>
    map(partial(flip(get), [cards]), slots(board, cards))

export const play = (card, index, board) =>
    update(index, setSlot(card, nth(index, board)), board)

export const remove = (card, board) =>
    clear(find(partial(includesS, [card]), board), board)
