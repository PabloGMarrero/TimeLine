import React from "react"
import { shallow } from 'enzyme'
import {slot} from './slot'


it("dado un slot sin carta", ()=>{

    const aSlot = slot(false, 1)
    expect(aSlot.hasCard).toBeFalsy
    expect(aSlot.position).toBe(1)

})

it("dado un slot con carta", ()=>{

    const aSlot = slot(true, 1)
    
    expect(aSlot.hasCard).toBeTruthy
    expect(aSlot.position).toBe(1)
})