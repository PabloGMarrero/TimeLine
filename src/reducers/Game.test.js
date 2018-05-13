import {Game as reducerGame } from './Game'
import {playCardFromPlayerhand, initGame} from '../actions/Game'
import { empty } from '../model/slot/slot';
import { Turn } from '../model/constants/constants';
import * as cardModule from '../model/cards/cards'
import * as handModule from '../model/hands/hands'
import * as deckModule from '../model/deck/deck'
import * as boardModule from '../model/board/board'


it('should support undefined state', ()=>{
    expect(reducerGame(undefined, {})).toEqual({})
})


it('should initialize correctly', ()=>{

    const initState = reducerGame(undefined, {})
    expect(initState).toEqual({})
})


it('should not affect the initial state', ()=>{
    expect(reducerGame(undefined, {type:'NOT_EXISTING'})).toEqual({})
})

it('should play card from player hand', ()=>{
    // const aSlot = empty(1)

    // const playerHandState = reducerGame(undefined, playCardFromPlayerhand(aSlot))

    // expect(playerHandState)
    // .toEqual({

    //     board: {},
    //     hands: {} 
    // })
})


it('should shuffle a deck', ()=>{

})

it('should player draw a card', ()=>{

})

it('should enemy draw a card', ()=>{

})

it('should play card from deck', ()=>{

})

it('should select a card', ()=>{

})

it('should deselect a card', ()=>{

})

it('should init a game', ()=>{

    // const igame = {
    //     turn: Turn.PLAYER,
    //     deck: {}, //deckModule.loadDeckWithCards(cardModule.cards()),
    //     board: {}, //boardModule.cardsBoard(6),
    //     hands: ({
    //         playerHand: {},//handModule.hand(5, true),
    //         enemyHand: {},//handModule.hand(5, false)
    //     })
    // }
    // expect(reducerGame(igame, initGame()))
    // .toEqual(igame)

})