import { update, zipObj} from 'ramda'
import {removeSelectedCard} from '../hands/hands'
import {get, update as updateSlot, createEmptySlots, isEmpty, isSelected} from "../slot/slot"
import { Places } from '../constants/constants'

export const cardsBoard = (size) => createEmptySlots(size)

export const playCardOnBoard = (slot, index, board) =>
    update(board[index].index, updateSlot(slot[0].card, board[index]), board)

export const revealCards = (board) =>  board.filter(slot => !isEmpty(slot)).map(slot => updateSlot({...get(slot), flipped:true}, slot))

export const addSelectedCardOnBoard = (slot, board, hand) => 
    update(slot.index, updateSlot(get(hand.slots.find(aSlot => isSelected(aSlot))), slot), board)


export const playCardFromHand = (slot, hand, board) =>({
    board: addSelectedCardOnBoard(slot, board, hand),
    hand:removeSelectedCard(hand)
})    
