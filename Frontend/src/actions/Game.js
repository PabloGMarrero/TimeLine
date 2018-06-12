import { forEach } from 'ramda'
import { Turn } from '../model/constants/constants'

const timesOnInterval = (fn, interval) => forEach((delay) => setTimeout(fn, delay), interval)

export function startNewGame(deck, dispatch) {
    initDeck(deck, dispatch)
    initHands(dispatch)
    playInitialCard(dispatch)
}

function initDeck(deck, dispatch) {
    dispatch(loadDeck(deck))
    dispatch(shuffleDeck())
}

function initHands(dispatch) {
    timesOnInterval(() => dispatch(drawCard(Turn.PLAYER)), [300, 600, 900, 1200, 1500])
    timesOnInterval(() => dispatch(drawCard(Turn.ENEMY)), [1800, 2100, 2400, 2700, 3000])
}

function playInitialCard(dispatch) {
    setTimeout(() => dispatch(playCardFromDeck()), 3300)
    setTimeout(() => dispatch(flipCard()), 3600)
    setTimeout(() => startFirstTurn(dispatch), 3900)
}

function startFirstTurn(dispatch) {
    dispatch(assignTurn(Turn.PLAYER))
    dispatch(startMainPhase())
}

export function playerPlayCardFromHand(BoardIndex, dispatch) {
    dispatch(playCardFromHand(BoardIndex))
    setTimeout(() => dispatch(flipCard()), 1000)
    setTimeout(() => dispatch(startYearResolutionPhase()), 1500)
}

export function playerPlayRandomCardFromHand(dispatch) {
    dispatch(selectRandomCardFromHand())
    dispatch(playRandomCardFromHand())
    setTimeout(() => dispatch(flipCard()), 1000)
    setTimeout(() => dispatch(startYearResolutionPhase()), 1500)
}

export function performWrongPlayEvent(dispatch) {
    setTimeout(() => dispatch(removeCard()), 1000)
    setTimeout(() => dispatch(drawCard()), 2000)
}

export function moveToNextTurn(dispatch) {
    dispatch(updateCurrentGameState())
    dispatch(startNextTurn())
}

export const LOAD_DECK = 'LOAD_DECK'

export const loadDeck = (deck) => ({
    type: LOAD_DECK,
    deck
})

export const SHUFFLE_DECK = 'SHUFFLE_DECK'

export const shuffleDeck = () => ({
    type: SHUFFLE_DECK
})

export const ASSIGN_TURN = 'ASSIGN_TURN'

export const assignTurn = (turn) => ({
    type: ASSIGN_TURN,
    turn
})

export const START_MAIN_PHASE = 'START_MAIN_PHASE'

export const startMainPhase = () => ({
    type: START_MAIN_PHASE
})

export const START_YEAR_RESOLUTION_PHASE = 'START_YEAR_RESOLUTION_PHASE'

export const startYearResolutionPhase = () => ({
    type: START_YEAR_RESOLUTION_PHASE
})

export const START_END_TURN_PHASE = 'START_END_TURN_PHASE'

export const startEndTurnPhase = () => ({
    type: START_END_TURN_PHASE
})

export const START_NEXT_TURN = 'START_NEXT_TURN'

export const startNextTurn = () => ({
    type: START_NEXT_TURN,
})

export const DRAW_CARD = 'DRAW_CARD'

export const drawCard = (turn) => ({
    type: DRAW_CARD,
    turn
})

export const REMOVE_CARD = 'REMOVE_CARD'

export const removeCard = () => ({
    type: REMOVE_CARD
})

export const SELECT_A_CARD = 'SELECT_A_CARD'

export const selectACard = (card) => ({
    type: SELECT_A_CARD,
    card
})

export const SELECT_RANDOM_CARD_FROM_HAND = 'SELECT_RANDOM_CARD_FROM_HAND'

export const selectRandomCardFromHand = () => ({
    type: SELECT_RANDOM_CARD_FROM_HAND,
})

export const DESELECT_CARD = 'DESELECT_CARD'

export const deselectCard = () => ({
    type: DESELECT_CARD
})

export const PLAY_CARD_FROM_DECK = 'PLAY_CARD_FROM_DECK'

export const playCardFromDeck = () => ({
    type: PLAY_CARD_FROM_DECK
})

export const PLAY_CARD_FROM_HAND = 'PLAY_CARD_FROM_PLAYERHAND'

export const playCardFromHand = (boardIndex) => ({
    type: PLAY_CARD_FROM_HAND,
    boardIndex
})

export const PLAY_RANDOM_CARD_FROM_HAND = 'PLAY_RANDOM_CARD_FROM_HAND'

export const playRandomCardFromHand = () => ({
    type: PLAY_RANDOM_CARD_FROM_HAND
})

export const FLIP_CARD = 'FLIP_CARD'

export const flipCard = () => ({
    type: FLIP_CARD
})

export const SHOW_CARD_CHOICES = 'SHOW_CARD_CHOICES'

export const showCardChoices = () => ({
    type: SHOW_CARD_CHOICES
})

export const UPDATE_CURRENT_GAME_STATE = 'UPDATE_CURRENT_GAME_STATE'

export const updateCurrentGameState = () => ({
    type: UPDATE_CURRENT_GAME_STATE
})