import * as ramda from 'ramda'
import {get as getCardFromSlot, update, createEmptySlots, isEmpty} from "../slot/slot"

export const hand = (size, owner) => ({
    slots: createEmptySlots(size),
    owner
})

export const get = (hand, index) => getCardFromSlot(hand.slots[index])

const getSlotsWithCardsInHand = (hand) => hand.slots.filter(slot => !isEmpty(slot))

const getSlotWithoutCardInHand = (hand) => hand.slots.find(slot => isEmpty(slot))

export const draw = (slot, hand) => ({
    slots: ramda.update(getSlotWithoutCardInHand(hand).index, update(slot[0].card, getSlotWithoutCardInHand(hand)), hand.slots),
    owner: hand.owner
})


const findASlotWithCardInHand = (card, hand) => hand.slots.find(slot => slot.card.key === card.key)

const selectSlot = (slot, slots) =>({
    ...hand,
    slots: ramda.update(slot.index, update(updatePropSelectedSlot(slot,true), slot), slots)
})

const updatePropSelectedSlot = (slot,selected) => ({
    ...getCardFromSlot(slot),
    selected
})

const deselectAll = hand => hand.slots.map(slot => update(updatePropSelectedSlot(slot, false), slot))

export const selectACard = (card, hand) => selectSlot(findASlotWithCardInHand(card, hand), deselectAll(hand))
