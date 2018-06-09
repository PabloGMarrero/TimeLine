import shuffle from 'shuffle-array'
import { tap, pipe, zipObj, splitAt, head } from 'ramda'
import { Places } from '../constants/constants'

export const emptyDeck = () => []

export const loadDeckWithCards = (cards) => cards

export const shuffleDeck = (deck) => tap(shuffle, deck)

export const pickCardFromDeck =
    pipe(
        splitAt(1),
        zipObj([Places.CARD, Places.DECK]),
        (_) => ({
            ..._,
            card: head(_.card)
        })
    )

export const size = (deck) => deck.length