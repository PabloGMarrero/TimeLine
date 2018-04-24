import React from "react"
import { shallow } from 'enzyme'

import {slot} from "../slot/slot"
import {hand} from './hands'


it("dada una mano sin cartas todos sus slots están vacias", ()=>{
    const aHand = hand(5)

    expect(aHand.every(slot => slot.hasCard).toBeTruthy)
})
