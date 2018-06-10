import { update } from 'ramda'
import shuffle from 'shuffle-array'

import { get as getCardFromSlot, set as setSlot, createEmptySlots, isEmpty, clear as clearSlot } from '../slot/slot'

export const emptyHand = (size, owner) => ({
    slots: createEmptySlots(size),
    owner
})

const set = (card, slot, { slots, owner }) => ({
    owner,
    slots: update(slot.index, setSlot(card, slot), slots)
})

const clear = (slot, { slots, owner }) => ({
    owner,
    slots: update(slot.index, clearSlot(slot), slots)
})

const getFreeSlot = ({ slots }) => slots.find(slot => isEmpty(slot))

const getSlotFromCard = (card, { slots }) => slots.find(_ => _.card === card.key)

const getSlotsWithCards = ({ slots }) => slots.filter(_ => _.card)

export const get = (index, { slots }, cards) => getCardFromSlot(slots[index], cards)

export const draw = (card, hand) => set(card, getFreeSlot(hand), hand)

export const removeCardFromHand = (card, hand) => clear(getSlotFromCard(card, hand), hand)

export const getRandomCardFromHand = (hand, cards) => getCardFromSlot(shuffle.pick(getSlotsWithCards(hand)), cards)

export const size = (hand) => getSlotsWithCards(hand).length