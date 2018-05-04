import { generate as generateCardKey } from 'shortid'
import shuffle from 'shuffle-array'
import { tap, pipe, zipObj, splitAt } from 'ramda'

import * as slotModule from "../slot/slot"
import { Places } from '../constants/constants';

const loadInitialStateOnDeck = (cards) => (
    cards.map(card => ({
        key: generateCardKey(),
        ...card,
        flipped: false,
        selected: false,
        visible: true
    }))
)

export const loadDeckWithCards = (cards) => slotModule.createSlotsWithCards(loadInitialStateOnDeck(cards))

export const shuffleDeck = (deck) => slotModule.updateSlots(tap(shuffle, deck))

export const pickCardFromDeck =
    pipe(
        splitAt(1),
        zipObj([Places.SLOT, Places.DECK]),
    )