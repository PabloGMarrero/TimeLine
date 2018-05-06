import React from "react"
import {empty, createSlots, clear, isEmpty, add} from './slot'


import {categories, beethoven} from '../cards/cards'

it("dado un slot sin carta", ()=>{

    const aSlot = empty(1)
    expect(aSlot.card).toBeFalsy
    expect(aSlot.index).toBe(1)

})

it("dado un slot con carta", ()=>{

    const aSlot = add(beethoven,empty(2))
    expect(aSlot.card).toBeTruthy
    expect(aSlot.index).toBe(2)
})

it("dado un slot agrego una carta, la borro y pregunto si esta vacio", ()=>{

    const aSlot = empty(1)

    add(aSlot, {})
    clear(aSlot)

    expect(aSlot.card).toBeFalsy
    expect(isEmpty(aSlot)).toBeTruthy

})