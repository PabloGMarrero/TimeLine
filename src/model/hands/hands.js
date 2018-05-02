import { addCard, isEmpty, createSlots, getCardFromSlot, contains, removeCard } from "../slot/slot"

export const hand = (cantSlots) => createSlots(cantSlots)

export const getSlotsWithCardsInHand = (hand) => hand.filter(slot => !isEmpty(slot))

export const getSlotWithoutCardInHand = (hand) => hand.find(slot => isEmpty(slot))

export const putCardInHand = (card, hand) => addCard(getSlotWithoutCardInHand(hand), card)

export const getCardOnHandWithIndex = (hand, index) => getCardFromSlot(hand[index])

export const getSlotWithCard = (card, hand) =>
    getSlotsWithCardsInHand(hand).find(slot => contains(slot, card))

const isEmptyHand = (hand) => hand.every(slot => isEmpty(slot))

export const removeCardInHand = (card, hand) =>
    !isEmptyHand(hand) && removeCard(getSlotWithCard(card, hand))