import React, { Component } from 'react'

import {createSlots, addCard, getCardFromSlot} from "../slot/slot"

export const cardsBoard = (cantOfPossibleCardsOnBoard) => (
    createSlots(cantOfPossibleCardsOnBoard)
)

export const putCardInBoardAtIndex = (board, card, index) => (
    addCard(board[index])
)

export function getCardInBoardAtIndex(board, card, index) {
    getCardFromSlot(board[index])
}