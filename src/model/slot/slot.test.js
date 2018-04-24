import React from "react"
import {slot, createSlots, addCard, removeCard, isEmpty} from './slot'

it("dado un slot sin carta", ()=>{

    const aSlot = slot(1)
    expect(aSlot.card).toBeFalsy
    expect(aSlot.index).toBe(1)

})

it("dado un slot con carta", ()=>{

    const aSlot = slot(2)

    addCard(aSlot, {})
    
    expect(aSlot.card).toBeTruthy
    expect(aSlot.index).toBe(2)
})

it("dado un slot agrego una carta, la borro y pregunto si esta vacio", ()=>{

    const aSlot = slot(1)

    addCard(aSlot, {})
    removeCard(aSlot)

    expect(aSlot.card).toBeFalsy
    expect(isEmpty(aSlot)).toBeTruthy

})
