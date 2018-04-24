import React from 'react'
//import {ramda} from 'ramda'
const ramda = require('ramda');

import {slot, createSlots} from "../slot/slot"

const firstEmptySlot = (hand) =>{
     //hand.first.hasCard
     hand.filter(slotWithoutCard)[0]
}

const slotWithoutCard = (slot) =>{
    slot.hasCard
}

export const hand = (cantSlots) =>(
   createSlots(cantSlots)
)
