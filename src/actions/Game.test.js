import {Game} from '../reducers/Game'
import {playCardFromPlayerhand, deselectCardsInHand} from './Game'

import * as cardModule from '../model/cards/cards'
import * as handModule from '../model/hands/hands'
import * as deckModule from '../model/deck/deck'
import * as boardModule from '../model/board/board'
import { Turn } from '../model/constants/constants'
import { empty } from '../model/slot/slot';

it('playCardFromPlayerhand', ()=>{
    const aSlot = empty(1)
    const functionPlayCardFromPlayerHand = playCardFromPlayerhand(aSlot)
    expect(playCardFromPlayerhand(aSlot)).toEqual(functionPlayCardFromPlayerHand)
})

it('deselectCardsInHand', ()=>{
    const aHand = handModule.hand(5, {})
    const functionDeselectedCardExpected = deselectCardsInHand(aHand)
    expect(deselectCardsInHand(aHand)).toEqual(functionDeselectedCardExpected)
})