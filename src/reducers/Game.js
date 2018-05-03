import { generate as generateCardKey } from 'shortid'

import * as gameActions from '../actions/Game'

import { Turn } from '../model/constants/constants'
import * as cardModule from '../model/cards/cards'
import * as handModule from '../model/hands/hands'
import * as deckModule from '../model/deck/deck'
import * as boardModule from '../model/board/board'


const loadInitialStateOnDeck = (cards) => (
    cards.map(card => ({
        key: generateCardKey(),
        ...card,
        flipped: false,
        selected: false,
        visible: true
    }))
)

const initialState = {
    turn: Turn.PLAYER,
    deck: deckModule.loadDeckWithCards(loadInitialStateOnDeck(cardModule.cards())),
    board: boardModule.cardsBoard(6),
    playerHand: handModule.hand(5, true),
    enemyHand: handModule.hand(5, false),
    selectedCard: null
}

export const Game = (state = initialState, action) => {

    var places = null

    switch (action.type) {

        case gameActions.START_GAME:
            return {
                ...state,
            }

        case gameActions.SHUFFLE_DECK:
            return {
                ...state,
                deck: deckModule.shuffleDeck(state.deck)
            }

        case gameActions.PLAYER_DRAW_CARD:
            places = deckModule.pick(state.deck)

            return {
                ...state,
                playerHand: handModule.put(places.slot, state.playerHand),
                deck: places.deck
            }

        case gameActions.ENEMY_DRAW_CARD:
            places = deckModule.pick(state.deck)
            return {
                ...state,
                enemyHand: handModule.put(places.slot, state.enemyHand),
                deck: places.deck
            }

        case gameActions.PLAY_INITIAL_CARD_FROM_DECK:
            places = deckModule.pick(state.deck)
            return {
                ...state,
                board: boardModule.playCard(places.slot, 3, state.board),
                deck: places.deck
            }

        default:
            return state
    }
}