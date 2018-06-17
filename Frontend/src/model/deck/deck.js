import shuffle from 'shuffle-array'
import { equals, partial, pipe, zipObj, isEmpty as isEmptyDeck, splitAt, head, tap, map, any } from 'ramda'
import { Places } from '../constants/constants'
import {findCard, keyOf} from '../cards/cards'

export const empty = () => []

export const isEmpty = (deck) => isEmptyDeck

export const includes = (card, deck) => any(partial(equals, [keyOf(card)]), deck)

export const loadDeck = (cards) => map(keyOf, cards)

export const shuffleDeck = (deck) => tap(shuffle, deck)

export const pickCardFromDeck = (deck, cards) =>
    pipe(
        splitAt(1),
        zipObj([Places.CARD, Places.DECK]),
        (_) => ({
            ..._,
            card: findCard(head(_.card), cards)
        })
    )(deck)