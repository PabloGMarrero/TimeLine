import { all, not } from 'ramda'
import { cards } from '../cards/cards'
import { empty, loadDeck, pickCardFromDeck, isEmpty, includes } from './deck'

it('dado un mazo vacio, pregunto si efectivamente esta vacio', () => {
    const deck = empty()

    expect(isEmpty(deck)).toBeTruthy()
})

it('dada una mazo recien cargado,  pregunto si contiene todo un cardSet dado', () => {
    const cardSet = cards()
    const deck = loadDeck(cardSet)

    expect(all(_ => includes(_, deck), cardSet)).toBeTruthy()
})

it('dada una mazo recien cargado, robo una carta, luego pregunto si el mazo ya no contiene esa carta', () => {
    const cardSet = cards()
    const deck = loadDeck(cardSet)
    const { card: pickedCard, deck: deckPostPick } = pickCardFromDeck(
        deck,
        cardSet
    )

    expect(not(includes(pickedCard, deckPostPick))).toBeTruthy()
})
