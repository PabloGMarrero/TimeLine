import {
    loadDeck, shuffleDeck, assignTurn, startMainPhase, startYearResolutionPhase,
    startEndTurnPhase, startNextTurn, drawCard, removeCard, selectACard,
    selectRandomCardFromHand, deselectCard, playCardFromDeck, playCardFromHand,
    playRandomCardFromHand, flipCard, showCardChoices, updateCurrentGameState
} from '../actions/Game'
import { Turn, Phase } from '../model/constants/constants'
import { Game as reducer } from './Game'
import { selectedCard } from '../model/cards/cards';


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

it('remove card', () => {

    const beforeReducerState = {
        cards: [{ key: 'test', visible: false }],
        board: [{ cardkey: undefined, index: 0, key: 0 },
        { cardkey: undefined, index: 1, key: 1 },
        { cardkey: undefined, index: 2, key: 2 },
        { cardkey: 'test', index: 3, key: 3 },
        { cardkey: undefined, index: 4, key: 4 }],
        deck: [],
        lastCardPlayed: {
            key: 'test',
            visible: false
        }
    }

    const afterReducerState = reducer(beforeReducerState, removeCard())

    const expectedState = {
        cards: [{ key: 'test', visible: false }],
        board: [{ cardkey: undefined, index: 0, key: 0 },
        { cardkey: undefined, index: 1, key: 1 },
        { cardkey: undefined, index: 2, key: 2 },
        { cardkey: undefined, index: 3, key: 3 },
        { cardkey: undefined, index: 4, key: 4 }],
        deck: [],
        lastCardPlayed: undefined
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('select card', () => {

    const dummyCard = {
        key: 'test',
        selected: false
    }
    const beforeReducerState = {
        cards: [dummyCard]
    }

    const afterReducerState = reducer(beforeReducerState, selectACard(dummyCard))

    const expectedState = {
        cards: [{ key: 'test', selected: true }],
        showingCardChoices: false
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('deselect card', () => {

    const dummyCard = {
        key: 'test',
        selected: true
    }
    const beforeReducerState = {
        cards: [dummyCard]
    }

    const afterReducerState = reducer(beforeReducerState, deselectCard(dummyCard))

    const expectedState = {
        cards: [{ key: 'test', selected: false }],
        showingCardChoices: false
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('start next turn from end turn phase player to main phase enemy', () => {

    const beforeReducerState = {
        turn: Turn.PLAYER,
        phase: Phase.END_TURN_PHASE
    }

    const afterReducerState = reducer(beforeReducerState, startNextTurn())

    const expectedState = {
        turn: Turn.ENEMY,
        phase: Phase.MAIN_PHASE

    }

    expect(afterReducerState).toEqual(expectedState)
})

it('start next turn from main phase enemy to main phase player', () => {

    const beforeReducerState = {
        turn: Turn.ENEMY,
        phase: Phase.MAIN_PHASE
    }

    const afterReducerState = reducer(beforeReducerState, startNextTurn())

    const expectedState = {
        turn: Turn.PLAYER,
        phase: Phase.MAIN_PHASE

    }

    expect(afterReducerState).toEqual(expectedState)
})

it('draw a card', () => {

    const dummyCard = {
        key: 'test',
        visible: false
    }

    const dummySlotsCard =
        [
            { cardkey: undefined, index: 0, key: 0 },
            { cardkey: undefined, index: 1, key: 1 },
            { cardkey: undefined, index: 2, key: 2 },
            { cardkey: undefined, index: 3, key: 3 },
            { cardkey: undefined, index: 4, key: 4 }
        ]

    const beforeReducerState = {
        turn: Turn.PLAYER,
        cards: [dummyCard],
        deck: [dummyCard.key],
        hands: {
            playerHand: {
                owner: Turn.PLAYER,
                slots: dummySlotsCard
            },
            enemyHand: {
                owner: Turn.ENEMY,
                slots: dummySlotsCard
            }
        }
    }

    const afterReducerState = reducer(beforeReducerState, drawCard(beforeReducerState.turn))

    const expectedState = {
        turn: Turn.PLAYER,
        cards: [{
            key: 'test',
            visible: true
        }],
        deck: [],
        hands: {
            playerHand: {
                slots: [
                    { cardkey: 'test', index: 0, key: 0 },
                    { cardkey: undefined, index: 1, key: 1 },
                    { cardkey: undefined, index: 2, key: 2 },
                    { cardkey: undefined, index: 3, key: 3 },
                    { cardkey: undefined, index: 4, key: 4 }
                ],
                owner: Turn.PLAYER
            },
            enemyHand: {
                slots: dummySlotsCard,
                owner: Turn.ENEMY
            }
        }
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('playCardFromDeck', () => {
    const dummyCard = {
        key: 'test',
        visible: false
    }

    const dummySlotsCard =
        [
            { cardkey: undefined, index: 0, key: 0 },
            { cardkey: undefined, index: 1, key: 1 },
            { cardkey: undefined, index: 2, key: 2 },
            { cardkey: undefined, index: 3, key: 3 },
            { cardkey: undefined, index: 4, key: 4 }
        ]

    const beforeReducerState = {
        board: dummySlotsCard,
        cards: [dummyCard],
        deck: [dummyCard.key],
        lastCardPlayed: undefined
    }

    const afterReducerState = reducer(beforeReducerState, playCardFromDeck())

    const expectedState = {
        board: [
            { cardkey: undefined, index: 0, key: 0 },
            { cardkey: undefined, index: 1, key: 1 },
            { cardkey: undefined, index: 2, key: 2 },
            { cardkey: 'test', index: 3, key: 3 },
            { cardkey: undefined, index: 4, key: 4 }
        ],
        cards: [{
            key: 'test',
            visible: true
        }],
        deck: [],
        lastCardPlayed: {
            key: 'test',
            visible: false
        }
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('play card from hand', () => {
    const dummyCard = {
        key: 'test',
        selected: true,
        visible: false
    }

    const dummySlotsCard =
        [
            { cardkey: undefined, index: 0, key: 0 },
            { cardkey: undefined, index: 1, key: 1 },
            { cardkey: undefined, index: 2, key: 2 },
            { cardkey: undefined, index: 3, key: 3 },
            { cardkey: undefined, index: 4, key: 4 }
        ]
    const beforeReducerState = {
        cards: [dummyCard],
        hands: {
            playerHand: {
                slots: [
                    { cardkey: 'test', index: 0, key: 0 },
                    { cardkey: undefined, index: 1, key: 1 },
                    { cardkey: undefined, index: 2, key: 2 },
                    { cardkey: undefined, index: 3, key: 3 },
                    { cardkey: undefined, index: 4, key: 4 }
                ],
                owner: Turn.PLAYER
            },
            enemyHand: {
                slots: dummySlotsCard,
                owner: Turn.ENEMY
            }
        },
        lastCardPlayed:undefined,
        board: dummySlotsCard,
        turn: Turn.PLAYER,
        showingCardChoices:true
    }

    const afterReducerState = reducer(beforeReducerState, playCardFromHand(3))
    const expectedState = {
        cards: [{ key: 'test',
        selected: false,
        visible: false}],
        hands: {
            playerHand: {
                slots: dummySlotsCard,
                owner: Turn.PLAYER
            },
            enemyHand: {
                slots: dummySlotsCard,
                owner: Turn.ENEMY
            }
        },
        lastCardPlayed:{ key: 'test',
        selected: true,
        visible: false},
        board: [
            { cardkey: undefined, index: 0, key: 0 },
            { cardkey: undefined, index: 1, key: 1 },
            { cardkey: undefined, index: 2, key: 2 },
            { cardkey: 'test', index: 3, key: 3 },
            { cardkey: undefined, index: 4, key: 4 }
        ],
        turn: Turn.PLAYER,
        showingCardChoices:false
        
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('show card choices', ()=>{

    const beforeReducerState = {
        showingCardChoices: false
    }

    const afterReducerState = reducer(beforeReducerState, showCardChoices())

    const expectedState = {
        showingCardChoices:true
    }

    expect(afterReducerState).toEqual(expectedState)
})

it('flip card in ' , ()=>{
    const dummyCard = {
        cardkey: 'test',
        visible:false,
        selected: true
    }

    const beforeReducerState = {
        cards: [dummyCard],
        lastCardPlayed: {cardkey: 'test', visible:true, selected: true}
    }

    const afterReducerState = reducer(beforeReducerState, flipCard())

    const expectedState = {
        cards: [{cardkey: 'test', flipped:true, visible:false, selected: true}],
        lastCardPlayed:  {cardkey: 'test', visible:true, selected: true}
    }
    expect(afterReducerState).toEqual(expectedState)
})

