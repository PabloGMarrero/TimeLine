import shuffle from 'shuffle-array'
import { partial, flip, pipe, zipObj, splitAt, head, length, zipWith, map, all, any } from 'ramda'
import { Places } from '../constants/constants'
import { empty as createSlots, set, get, replace, cardkeyOf, isEmpty as isEmptyS, includes as includesS } from '../slot/slot'

export const empty = () => []

export const isEmpty = (deck) => all(isEmptyS, deck)

export const includes = (card, deck) => any(partial(includesS, [card]), deck)

export const loadDeck = (cards) => zipWith(flip(set), createSlots(length(cards)), cards)

export const shuffleDeck = (deck) => zipWith(replace, shuffle(map(cardkeyOf, deck)), deck)

export const pickCardFromDeck = (deck, cards) =>
    pipe(
        splitAt(1),
        zipObj([Places.CARD, Places.DECK]),
        (_) => ({
            ..._,
            card: get(head(_.card), cards)
        })
    )(deck)