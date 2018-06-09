import shuffle from 'shuffle-array'

import {
    FETCH_DECK, LOAD_DECK, SHUFFLE_DECK, ASSIGN_TURN, SET_PHASE, DRAW_CARD, PLAY_CARD_FROM_DECK,
    SELECT_A_CARD, DESELECT_CARD, FLIP_CARDS, SHOW_CARD_CHOICES, PLAY_CARD_FROM_HAND,
    EVALUATE_TIMELINE, NEXT_PHASE, NEXT_TURN, SELECT_RANDOM_CARD_FROM_HAND,
    PLAY_RANDOM_CARD_FROM_HAND, UPDATE_CURRENT_GAME_STATE
} from '../actions/Game'

import {
    emptyCards, cards, revealCard, selectCard, deselectCards, flipCards,
    selectedCard, evaluateTimeline, performWrongTurnAction, performCorrectTurnAction
} from '../model/cards/cards'
import { get as getCardFromSlot } from '../model/slot/slot'
import { emptyHand, draw, removeCardFromHand, getRandomCardFromHand, size as handSize } from '../model/hands/hands'
import { emptyDeck, pickCardFromDeck, loadDeckWithCards, shuffleDeck, size as deckSize } from '../model/deck/deck'
import { emptyBoard, playCardOnBoard, slotsOnBoard, removeLastPlayedCardOnBoard } from '../model/board/board'
import { GameMode, GameResult, Turn, Phase, nextPhase, nextTurn } from '../model/constants/constants'

const initialState = {
    mode: GameMode.OFFLINE_PLAYER_VERSUS_BOT,
    status: GameResult.PLAYING,
    turn: Turn.NOT_ESTABLISHED,
    phase: Phase.NOT_ESTABLISHED,
    lastCardPlayed: undefined,
    showingCardChoices: false,
    cards: emptyCards(),
    deck: emptyDeck(),
    hands: ({
        playerHand: emptyHand(5, Turn.PLAYER),
        enemyHand: emptyHand(5, Turn.ENEMY)
    }),
    board: emptyBoard(6),
}

export const Game = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DECK:
            return {
                ...state,
                cards: cards()
            }

        case LOAD_DECK:
            return {
                ...state,
                deck: loadDeckWithCards(state.cards)
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

        case SET_PHASE:
            return {
                ...state,
                phase: action.phase
            }

        case NEXT_PHASE:
            return {
                ...state,
                phase: nextPhase(state.phase)
            }

        case NEXT_TURN:
            return {
                ...state,
                turn: nextTurn(state.turn)
            }

        case DRAW_CARD:
            var { card: pickedCard, deck: postDrawDeck } = pickCardFromDeck(state.deck)

            return {
                ...state,
                cards: revealCard(pickedCard, state.cards),
                hands: {
                    playerHand: (action.turn === Turn.PLAYER || state.turn === Turn.PLAYER ? (draw(pickedCard, state.hands.playerHand)) : state.hands.playerHand),
                    enemyHand: (action.turn === Turn.ENEMY || state.turn === Turn.ENEMY ? (draw(pickedCard, state.hands.enemyHand)) : state.hands.enemyHand)
                },
                deck: postDrawDeck
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
                cards: selectCard(getRandomCardFromHand(currentHand, state.cards), state.cards),
            }

        case DESELECT_CARD:
            return {
                ...state,
                cards: deselectCards(state.cards),
                showingCardChoices: false
            }

        case PLAY_CARD_FROM_DECK:
            var { card: initialCard, deck: postPlayCardDeck } = pickCardFromDeck(state.deck)

            return {
                ...state,
                cards: revealCard(initialCard, state.cards),
                board: playCardOnBoard(initialCard, 3, state.board),
                deck: postPlayCardDeck,
                lastCardPlayed: initialCard
            }

        case PLAY_CARD_FROM_HAND:
            var selectedCardFromHand = selectedCard(state.cards)

            return {
                ...state,
                board: playCardOnBoard(selectedCardFromHand, action.boardIndex, state.board),
                hands: {
                    playerHand: (state.turn === Turn.PLAYER ? removeCardFromHand(selectedCardFromHand, state.hands.playerHand) : state.hands.playerHand),
                    enemyHand: (state.turn === Turn.ENEMY ? removeCardFromHand(selectedCardFromHand, state.hands.enemyHand) : state.hands.enemyHand)
                },
                lastCardPlayed: selectedCardFromHand,
                cards: deselectCards(state.cards),
                showingCardChoices: false
            }

        case PLAY_RANDOM_CARD_FROM_HAND:
            var selectedRandomCardFromHand = selectedCard(state.cards)

            return {
                ...state,
                board: playCardOnBoard(selectedRandomCardFromHand, shuffle.pick(shuffle([0, 1, 2, 3, 4, 5])), state.board),
                hands: {
                    playerHand: (state.turn === Turn.PLAYER ? removeCardFromHand(selectedRandomCardFromHand, state.hands.playerHand) : state.hands.playerHand),
                    enemyHand: (state.turn === Turn.ENEMY ? removeCardFromHand(selectedRandomCardFromHand, state.hands.enemyHand) : state.hands.enemyHand)
                },
                lastCardPlayed: selectedRandomCardFromHand,
                cards: deselectCards(state.cards),
            }

        case FLIP_CARDS:
            return {
                ...state,
                cards: flipCards(slotsOnBoard(state.board, state.cards), state.cards)
            }

        case EVALUATE_TIMELINE:
            var { card: pickedCardOnEvaluate, deck: postDrawDeckOnEvaluate } = pickCardFromDeck(state.deck)

            return evaluateTimeline(slotsOnBoard(state.board, state.cards)
                .map(_ => getCardFromSlot(_, state.cards))) ?
                {
                    ...state,
                    cards: performCorrectTurnAction(state.lastCardPlayed, state.cards),
                } :
                {
                    ...state,
                    cards: performWrongTurnAction(pickedCardOnEvaluate, state.lastCardPlayed, state.cards),
                    hands: {
                        playerHand: (action.turn === Turn.PLAYER || state.turn === Turn.PLAYER ? (draw(pickedCardOnEvaluate, state.hands.playerHand)) : state.hands.playerHand),
                        enemyHand: (action.turn === Turn.ENEMY || state.turn === Turn.ENEMY ? (draw(pickedCardOnEvaluate, state.hands.enemyHand)) : state.hands.enemyHand)
                    },
                    deck: postDrawDeckOnEvaluate,
                    board: removeLastPlayedCardOnBoard(state.lastCardPlayed, state.board)
                }

        case UPDATE_CURRENT_GAME_STATE:
            return {
                ...state,
                status: (deckSize(state.deck) === 0 ? GameResult.TIE :
                    handSize(state.hands.playerHand) === 0 ? GameResult.WINNER :
                        handSize(state.hands.enemyHand) === 0 ? GameResult.LOSER :
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