import shuffle from 'shuffle-array'
import { tap, pipe, zipObj, splitAt } from 'ramda'

import * as slotModule from "../slot/slot"
import { Places } from '../constants/constants';

export const loadDeckWithCards = (cards) => slotModule.createSlotsWithCards(cards)

export const shuffleDeck = (deck) => slotModule.updateSlots(tap(shuffle, deck))

export const pick =
    pipe(
        splitAt(1),
        zipObj([Places.SLOT, Places.DECK]),
    )