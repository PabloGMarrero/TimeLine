import * as ramda from 'ramda'
import * as slotModule from "../slot/slot"

export const hand = (size, owner) => ({
    slots: slotModule.createEmptySlots(size),
    owner
})

export const get = (hand, index) => slotModule.get(hand.slots[index])

const getSlotsWithCardsInHand = (hand) => hand.slots.filter(slot => !slotModule.isEmpty(slot))

const getSlotWithoutCardInHand = (hand) => hand.slots.find(slot => slotModule.isEmpty(slot))

export const draw = (slot, hand) => ({
    slots: ramda.update(getSlotWithoutCardInHand(hand).index, slotModule.update(slot[0].card, getSlotWithoutCardInHand(hand)), hand.slots),
    owner: hand.owner
})