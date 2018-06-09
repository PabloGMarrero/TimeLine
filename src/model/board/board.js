import { update, innerJoin } from 'ramda'

import { get as getCardFromSlot, set as setSlot, createEmptySlots, clear as clearSlot } from "../slot/slot"

export const emptyBoard = (size) => createEmptySlots(size)

export const get = (slot, cards) => getCardFromSlot(slot, cards)

const clear = (slot, board) => update(slot.index, clearSlot(slot), board)

export const slotsOnBoard = (board, cards) =>
    innerJoin((slot, card) => slot.card === card.key, board, cards)

export const playCardOnBoard = (card, index, board) =>
    update(index, setSlot(card, board[index]), board)

const findSlotFromCard = (card, board) => board.find(_ => _.card === card.key)

export const removeLastPlayedCardOnBoard = (card, board) => clear(findSlotFromCard(card, board), board)