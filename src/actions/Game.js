import { forEach } from 'ramda'

import { Turn } from '../model/constants/constants'
import * as cardModule from '../model/cards/cards'
import * as handModule from '../model/hands/hands'
import * as deckModule from '../model/deck/deck'
import * as boardModule from '../model/board/board'

const timesOnInterval = (fn, interval) => forEach((delay) => setTimeout(fn, delay), interval)

export function startNewGame(dispatch) {
    dispatch(initGame())
    dispatch(shuffleDeck())
    timesOnInterval(() => dispatch(playerDrawCard()), [300, 600, 900, 1200, 1500])
    timesOnInterval(() => dispatch(enemyDrawCard()), [1800, 2100, 2400, 2700, 3000])
    setTimeout(() => dispatch(playCardFromDeck()), 3300)
}

export const INIT_GAME = 'INIT_GAME'

export const initGame = () => ({
    type: INIT_GAME,
    turn: Turn.PLAYER,
    deck: deckModule.loadDeckWithCards(cardModule.cards()),
    board: boardModule.cardsBoard(6),
    hands: ({
        playerHand: handModule.hand(5, true),
        enemyHand: handModule.hand(5, false)
    })
})

export const SHUFFLE_DECK = 'SHUFFLE_DECK'

export const shuffleDeck = () => ({
    type: SHUFFLE_DECK,
})

export const PLAYER_DRAW_CARD = 'PLAYER_DRAW_CARD'

export const playerDrawCard = () => ({
    type: PLAYER_DRAW_CARD,
})

export const ENEMY_DRAW_CARD = 'ENEMY_DRAW_CARD'

export const enemyDrawCard = () => ({
    type: ENEMY_DRAW_CARD,
})

export const PLAY_CARD_FROM_DECK = 'PLAY_CARD_FROM_DECK'

export const playCardFromDeck = () => ({
    type: PLAY_CARD_FROM_DECK,
})

export const SELECT_A_CARD = "SELECT_A_CARD"

export const selectACard = (card, hand) => ({
    type: SELECT_A_CARD,
    hand,
    card
})

export const DESELECT_CARDS_IN_HAND = "DESELECT_CARDS_IN_HAND"

export const deselectCardsInHand = (hand) =>({
    type: DESELECT_CARDS_IN_HAND,
    hand
})

export const PLAY_CARD_FROM_PLAYERHAND = "PLAY_CARD_FROM_PLAYERHAND"

export const playCardFromPlayerhand = (slot) => ({
    type: PLAY_CARD_FROM_PLAYERHAND,
    slot
})

