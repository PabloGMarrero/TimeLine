import shuffle from 'shuffle-array'

import {
    LOAD_DECK, SHUFFLE_DECK, ASSIGN_TURN, DRAW_CARD, PLAY_CARD_FROM_DECK, UPDATE_CURRENT_GAME_STATE,
    SELECT_A_CARD, DESELECT_CARD, FLIP_CARD, SHOW_CARD_CHOICES, PLAY_CARD_FROM_HAND,
    START_NEXT_TURN, SELECT_RANDOM_CARD_FROM_HAND, REMOVE_CARD, PLAY_RANDOM_CARD_FROM_HAND,
    START_MAIN_PHASE, START_YEAR_RESOLUTION_PHASE, START_END_TURN_PHASE
} from '../actions/Game'
import { reveal, selectCard, deselectCards, flipCard, selectedCard } from '../model/cards/cards'
import { empty as emptyH, draw, remove as removeH, random as randomH, isEmpty as isEmptyH } from '../model/hand/hand'
import { empty as emptyD, pickCardFromDeck, loadDeck, shuffleDeck, isEmpty as isEmptyD } from '../model/deck/deck'
import { empty as emptyB, play, remove as removeB } from '../model/board/board'
import { GameMode, GameResult, Turn, Phase, nextTurn } from '../model/constants/constants'

const initialState = {
    mode: GameMode.OFFLINE_PLAYER_VERSUS_BOT,
    status: GameResult.PLAYING,
    turn: Turn.NOT_ESTABLISHED,
    phase: Phase.NOT_ESTABLISHED,
    lastCardPlayed: undefined,
    showingCardChoices: false,
    cards: [],
    deck: emptyD(),
    hands: ({
        playerHand: emptyH(5, Turn.PLAYER),
        enemyHand: emptyH(5, Turn.ENEMY)
    }),
    board: emptyB(6)
}

export const Game = (state = initialState, action) => {

    switch (action.type) {

    case LOAD_DECK:
        return {
            ...state,
            cards: action.deck,
            deck: loadDeck(action.deck)
        }

    case SHUFFLE_DECK:
        return {
            ...state,
            deck: shuffleDeck(state.deck)
        }

    case ASSIGN_TURN:
        return {
            ...state,
            turn: action.turn
        }

    case START_MAIN_PHASE:
        return {
            ...state,
            phase: Phase.MAIN_PHASE
        }

    case START_YEAR_RESOLUTION_PHASE:
        return {
            ...state,
            phase: Phase.YEAR_RESOLUTION_PHASE
        }

    case START_END_TURN_PHASE:
        return {
            ...state,
            phase: Phase.END_TURN_PHASE
        }

    case START_NEXT_TURN:
        return {
            ...state,
            turn: nextTurn(state.turn),
            phase: Phase.MAIN_PHASE
        }

    case DRAW_CARD:
        var { card: pickedCard, deck: postDrawDeck } = pickCardFromDeck(state.deck, state.cards)

        return {
            ...state,
            cards: reveal(pickedCard, state.cards),
            hands: {
                playerHand: (action.turn === Turn.PLAYER || state.turn === Turn.PLAYER ? (draw(pickedCard, state.hands.playerHand)) : state.hands.playerHand),
                enemyHand: (action.turn === Turn.ENEMY || state.turn === Turn.ENEMY ? (draw(pickedCard, state.hands.enemyHand)) : state.hands.enemyHand)
            },
            deck: postDrawDeck
        }

    case REMOVE_CARD:
        return {
            ...state,
            board: removeB(state.lastCardPlayed, state.board)
        }

    case SELECT_A_CARD:
        return {
            ...state,
            cards: selectCard(action.card, state.cards),
            showingCardChoices: false
        }

    case SELECT_RANDOM_CARD_FROM_HAND:
        var currentHand = state.turn === Turn.PLAYER ? state.hands.playerHand : state.hands.enemyHand

        return {
            ...state,
            cards: selectCard(randomH(currentHand, state.cards), state.cards),
        }

    case DESELECT_CARD:
        return {
            ...state,
            cards: deselectCards(state.cards),
            showingCardChoices: false
        }

    case PLAY_CARD_FROM_DECK:
        var { card: initialCard, deck: postPlayCardDeck } = pickCardFromDeck(state.deck, state.cards)

        return {
            ...state,
            cards: reveal(initialCard, state.cards),
            board: play(initialCard, 3, state.board),
            deck: postPlayCardDeck,
            lastCardPlayed: initialCard
        }

    case PLAY_CARD_FROM_HAND:
        var selectedCardFromHand = selectedCard(state.cards)

        return {
            ...state,
            board: play(selectedCardFromHand, action.boardIndex, state.board),
            hands: {
                playerHand: (state.turn === Turn.PLAYER ? removeH(selectedCardFromHand, state.hands.playerHand) : state.hands.playerHand),
                enemyHand: (state.turn === Turn.ENEMY ? removeH(selectedCardFromHand, state.hands.enemyHand) : state.hands.enemyHand)
            },
            lastCardPlayed: selectedCardFromHand,
            cards: deselectCards(state.cards),
            showingCardChoices: false
        }

    case PLAY_RANDOM_CARD_FROM_HAND:
        var selectedRandomCardFromHand = selectedCard(state.cards)

        return {
            ...state,
            board: play(selectedRandomCardFromHand, shuffle.pick(shuffle([0, 1, 2, 3, 4, 5])), state.board),
            hands: {
                playerHand: (state.turn === Turn.PLAYER ? removeH(selectedRandomCardFromHand, state.hands.playerHand) : state.hands.playerHand),
                enemyHand: (state.turn === Turn.ENEMY ? removeH(selectedRandomCardFromHand, state.hands.enemyHand) : state.hands.enemyHand)
            },
            lastCardPlayed: selectedRandomCardFromHand,
            cards: deselectCards(state.cards),
        }

    case FLIP_CARD:
        return {
            ...state,
            cards: flipCard(state.lastCardPlayed, state.cards)
        }

    case UPDATE_CURRENT_GAME_STATE:
        return {
            ...state,
            status: (isEmptyD(state.deck)? GameResult.TIE :
                isEmptyH(state.hands.playerHand)? GameResult.WINNER :
                    isEmptyH(state.hands.enemyHand)? GameResult.LOSER :
                        GameResult.PLAYING)
        }

    case SHOW_CARD_CHOICES:
        return {
            ...state,
            showingCardChoices: true
        }

    default:
        return state
    }
}