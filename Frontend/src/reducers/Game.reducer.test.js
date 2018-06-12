import {
    loadDeck, shuffleDeck, assignTurn, startMainPhase, startYearResolutionPhase,
    startEndTurnPhase, startNextTurn, drawCard, removeCard, selectACard,
    selectRandomCardFromHand, deselectCard, playCardFromDeck, playCardFromHand,
    playRandomCardFromHand, flipCard, showCardChoices, updateCurrentGameState
} from '../actions/Game'
import { Turn, Phase } from '../model/constants/constants'
import { Game as reducer } from './Game'


const { NOT_ESTABLISHED: PHASE_NOT_ESTABLISHED, INITIAL_SETUP_PHASE, TURN_ASSIGNMENT_PHASE,
    MAIN_PHASE, YEAR_RESOLUTION_PHASE, END_TURN_PHASE } = Phase

const { NOT_ESTABLISHED: TURN_NOT_ESTABLISHED, PLAYER, ENEMY } = Turn

it('Test reducer on assingTurn action dispath', () => {
    const initialState = { turn: TURN_NOT_ESTABLISHED }
    const action = assignTurn(PLAYER)
    const expectedPayload = { turn: PLAYER }

    expect(reducer(initialState, action)).toEqual(expectedPayload)
})

it('Test reducer on startMainPhase action dispath', () => {
    const initialState = { phase: PHASE_NOT_ESTABLISHED }
    const action = startMainPhase()
    const expectedPayload = { phase: MAIN_PHASE }

    expect(reducer(initialState, action)).toEqual(expectedPayload)
})

it('Test reducer on startYearResolutionPhase action dispath', () => {
    const initialState = { phase: PHASE_NOT_ESTABLISHED }
    const action = startYearResolutionPhase()
    const expectedPayload = { phase: YEAR_RESOLUTION_PHASE }

    expect(reducer(initialState, action)).toEqual(expectedPayload)
})

it('Test reducer on startEndTurnPhase action dispath', () => {
    const initialState = { phase: PHASE_NOT_ESTABLISHED }
    const action = startEndTurnPhase()
    const expectedPayload = { phase: END_TURN_PHASE }

    expect(reducer(initialState, action)).toEqual(expectedPayload)
})

it('Test reducer on startNextTurn action dispath', () => {
    const initialState = {
        turn: PLAYER,
        phase: END_TURN_PHASE
    }
    const action = startNextTurn()
    const expectedPayload = {
        turn: ENEMY,
        phase: MAIN_PHASE
    }

    expect(reducer(initialState, action)).toEqual(expectedPayload)
})
