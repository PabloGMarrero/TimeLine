import * as ramda from 'ramda'
import * as slotModule from "../slot/slot"

export const cardsBoard = (size) => slotModule.createEmptySlots(size)

export const playCardOnBoard = (slot, index, board) =>
    ramda.update(board[index].index, slotModule.update(slot[0].card, board[index]), board)