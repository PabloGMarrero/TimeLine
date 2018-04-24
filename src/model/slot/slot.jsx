import React from 'react'
const ramda = require('ramda');

export const slot = (hasCardSlot, positionSlot)=>({
        hasCard: hasCardSlot,
        position: positionSlot
})

export function createSlots(cantSlots) {
        var index = 0 
        return ramda.repeat(slot(false, index++), cantSlots)
}