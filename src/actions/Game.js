import { forEach } from 'ramda'
import { Turn, Phase } from '../model/constants/constants'

const timesOnInterval = (fn, interval) => forEach((delay) => setTimeout(fn, delay), interval)

export function startNewGame(dispatch) {
    initDeck(dispatch)
    initHands(dispatch)
    playInitialCard(dispatch)
    setTimeout(() => startFirstTurn(dispatch), 3900)
}

function initDeck(dispatch) {
    dispatch(fetchDeck())
    dispatch(loadDeck())
    dispatch(shuffleDeck())
}

function initHands(dispatch) {
    timesOnInterval(() => dispatch(drawCard(Turn.PLAYER)), [300, 600, 900, 1200, 1500])
    timesOnInterval(() => dispatch(drawCard(Turn.ENEMY)), [1800, 2100, 2400, 2700, 3000])
}

function playInitialCard(dispatch) {
    setTimeout(() => dispatch(playCardFromDeck()), 3300)
    setTimeout(() => dispatch(flipCards()), 3600)
}

function startFirstTurn(dispatch) {
    dispatch(assignTurn(Turn.PLAYER))
    dispatch(setPhase(Phase.MAIN_PHASE))
}

export function playerPlayCardFromHand(BoardIndex, dispatch) {
    dispatch(playCardFromHand(BoardIndex))
    startYearResolutionPhase(dispatch)
}

export function playerPlayRandomCardFromHand(dispatch) {
    dispatch(selectRandomCardFromHand())
    dispatch(playRandomCardFromHand())
    startYearResolutionPhase(dispatch)
}

function startYearResolutionPhase(dispatch) {
    dispatch(nextPhase())
    setTimeout(() => dispatch(flipCards()), 500)
    setTimeout(() => dispatch(evaluateTimeLine()), 1000)
    setTimeout(() => startEndTurnPhase(dispatch), 1800)
}

function startEndTurnPhase(dispatch) {
    dispatch(nextPhase())
    dispatch(updateCurrentGameState())
    beginsNextTurn(dispatch)
}

function beginsNextTurn(dispatch) {
    dispatch(nextTurn())
    dispatch(nextPhase())
}

export const FETCH_DECK = 'FETCH_DECK'

export const fetchDeck = () => ({
    type: FETCH_DECK
})

export const LOAD_DECK = 'LOAD_DECK'

export const loadDeck = () => ({
    type: LOAD_DECK
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

export const SET_PHASE = 'SET_PHASE'

export const setPhase = (phase) => ({
    type: SET_PHASE,
    phase
})

export const NEXT_PHASE = 'NEXT_PHASE'

export const nextPhase = () => ({
    type: NEXT_PHASE,
})

export const NEXT_TURN = 'NEXT_TURN'

export const nextTurn = () => ({
    type: NEXT_TURN,
})

export const DRAW_CARD = 'DRAW_CARD'

export const drawCard = (turn) => ({
    type: DRAW_CARD,
    turn
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

export const FLIP_CARDS = 'FLIP_CARDS'

export const flipCards = () => ({
    type: FLIP_CARDS
})

export const SHOW_CARD_CHOICES = 'SHOW_CARD_CHOICES'

export const showCardChoices = () => ({
    type: SHOW_CARD_CHOICES
})

export const EVALUATE_TIMELINE = 'EVALUATE_TIMELINE'

export const evaluateTimeLine = () => ({
    type: EVALUATE_TIMELINE
})

export const UPDATE_CURRENT_GAME_STATE = 'UPDATE_CURRENT_GAME_STATE'

export const updateCurrentGameState = () => ({
    type: UPDATE_CURRENT_GAME_STATE
})