import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { head } from 'ramda'

import {
    LOAD_DECK, SHUFFLE_DECK, ASSIGN_TURN, START_MAIN_PHASE, START_YEAR_RESOLUTION_PHASE,
    START_END_TURN_PHASE, START_NEXT_TURN, DRAW_CARD, REMOVE_CARD, SELECT_A_CARD,
    SELECT_RANDOM_CARD_FROM_HAND, DESELECT_CARD, PLAY_CARD_FROM_DECK, PLAY_CARD_FROM_HAND,
    PLAY_RANDOM_CARD_FROM_HAND, FLIP_CARD, SHOW_CARD_CHOICES, UPDATE_CURRENT_GAME_STATE,

    loadDeck, shuffleDeck, assignTurn, startMainPhase, startYearResolutionPhase,
    startEndTurnPhase, startNextTurn, drawCard, removeCard, selectACard,
    selectRandomCardFromHand, deselectCard, playCardFromDeck, playCardFromHand,
    playRandomCardFromHand, flipCard, showCardChoices, updateCurrentGameState,
    moveToNextTurn
} from './Game'
import { cards } from '../model/cards/cards'
import { empty } from '../model/deck/deck'
import { Turn } from '../model/constants/constants'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('should dispatch load deck action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const deck = empty()

    store.dispatch(loadDeck(deck))

    const actions = store.getActions()
    const expectedPayload = {
        type: LOAD_DECK,
        deck: deck
    }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch shuffle deck action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(shuffleDeck())

    const actions = store.getActions()
    const expectedPayload = { type: SHUFFLE_DECK }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch assing turn action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const turn = Turn.PLAYER

    store.dispatch(assignTurn(turn))

    const actions = store.getActions()
    const expectedPayload = {
        type: ASSIGN_TURN,
        turn: turn
    }

    expect(actions).toEqual([expectedPayload])
})


it('should dispatch start main phase action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(startMainPhase())

    const actions = store.getActions()
    const expectedPayload = { type: START_MAIN_PHASE }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch start year resolution phase action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(startYearResolutionPhase())

    const actions = store.getActions()
    const expectedPayload = { type: START_YEAR_RESOLUTION_PHASE }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch start end turn phase action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(startEndTurnPhase())

    const actions = store.getActions()
    const expectedPayload = { type: START_END_TURN_PHASE }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch start nect turn action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(startNextTurn())

    const actions = store.getActions()
    const expectedPayload = { type: START_NEXT_TURN }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch draw card action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const turn = Turn.PLAYER

    store.dispatch(drawCard(turn))

    const actions = store.getActions()
    const expectedPayload = {
        type: DRAW_CARD,
        turn: turn
    }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch remove card action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(removeCard())

    const actions = store.getActions()
    const expectedPayload = { type: REMOVE_CARD }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch select card action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const cardSet = cards()
    const card = head(cardSet)

    store.dispatch(selectACard(card))

    const actions = store.getActions()
    const expectedPayload = {
        type: SELECT_A_CARD,
        card: card
    }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch select a random card from hand action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(selectRandomCardFromHand())

    const actions = store.getActions()
    const expectedPayload = { type: SELECT_RANDOM_CARD_FROM_HAND }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch deselect card action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(deselectCard())

    const actions = store.getActions()
    const expectedPayload = { type: DESELECT_CARD }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch play card from deck action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(playCardFromDeck())

    const actions = store.getActions()
    const expectedPayload = { type: PLAY_CARD_FROM_DECK }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch play card from hand action', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const boardIndex = 3

    store.dispatch(playCardFromHand(boardIndex))

    const actions = store.getActions()
    const expectedPayload = {
        type: PLAY_CARD_FROM_HAND,
        boardIndex: boardIndex
    }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch play random card from hand action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(playRandomCardFromHand())

    const actions = store.getActions()
    const expectedPayload = { type: PLAY_RANDOM_CARD_FROM_HAND }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch flip card action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(flipCard())

    const actions = store.getActions()
    const expectedPayload = { type: FLIP_CARD }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch show card choices action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(showCardChoices())

    const actions = store.getActions()
    const expectedPayload = { type: SHOW_CARD_CHOICES }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch update game current state action', () => {
    const initialState = {}
    const store = mockStore(initialState)

    store.dispatch(updateCurrentGameState())

    const actions = store.getActions()
    const expectedPayload = { type: UPDATE_CURRENT_GAME_STATE }

    expect(actions).toEqual([expectedPayload])
})

it('should dispatch update game current state actioooon', () => {
    const initialState = {}
    const store = mockStore(initialState)

    moveToNextTurn(store.dispatch)

    const actions = store.getActions()
    const expectedPayload = [
        { type: UPDATE_CURRENT_GAME_STATE },
        { type: START_NEXT_TURN }
    ]

    expect(actions).toEqual(expectedPayload)
})