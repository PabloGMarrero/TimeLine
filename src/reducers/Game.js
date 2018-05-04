import {
    INIT_GAME, SHUFFLE_DECK, PLAYER_DRAW_CARD, ENEMY_DRAW_CARD, PLAY_CARD_FROM_DECK
} from '../actions/Game'

import { draw } from '../model/hands/hands'
import { pickCardFromDeck, shuffleDeck } from '../model/deck/deck'
import { playCardOnBoard } from '../model/board/board'

const initialState = {
    selectedCard: null
}

export const Game = (state = initialState, action) => {
    switch (action.type) {

        case INIT_GAME:
            return {
                ...state,
                turn: action.turn,
                deck: action.deck,
                board: action.board,
                hands: action.hands
            }

        case SHUFFLE_DECK:
            return {
                ...state,
                deck: shuffleDeck(state.deck)
            }

        case PLAYER_DRAW_CARD:
            var { slot: playerCardSlot, deck: postPlayerDrawDeck } = pickCardFromDeck(state.deck)
            return {
                ...state,
                hands: {
                    playerHand: draw(playerCardSlot, state.hands.playerHand),
                    enemyHand: state.hands.enemyHand
                },
                deck: postPlayerDrawDeck
            }

        case ENEMY_DRAW_CARD:
            var { slot: enemyCardSlot, deck: postEnemyDrawDeck } = pickCardFromDeck(state.deck)
            return {
                ...state,
                hands: {
                    playerHand: state.hands.playerHand,
                    enemyHand: draw(enemyCardSlot, state.hands.enemyHand)
                },
                deck: postEnemyDrawDeck
            }

        case PLAY_CARD_FROM_DECK:
            var { slot: initialCardSlot, deck: postPlayCardDeck } = pickCardFromDeck(state.deck)
            return {
                ...state,
                board: playCardOnBoard(initialCardSlot, 3, state.board),
                deck: postPlayCardDeck
            }

        default:
            return state
    }
}