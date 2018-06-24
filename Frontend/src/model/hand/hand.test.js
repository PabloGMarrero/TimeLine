import { head } from 'ramda'
import { cards } from '../cards/cards'
import { get, empty, isEmpty, includes, draw, remove, random } from './hand'

it('dada una mano vacia, pregunto si efectivamente esta vacia', () => {
    const hand = empty(6)

    expect(isEmpty(hand)).toBeTruthy()
})

it('dada una mano vacia, robo una carta y pregunto si la contiene', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const hand = draw(card, empty(6))

    expect(includes(card, hand)).toBeTruthy()
})

it('dada una mano con una carta la cual remuevo y pregunto si la mano esta vacia', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const hand = remove(card, draw(card, empty(6)))

    expect(isEmpty(hand)).toBeTruthy()
})

it('dada una mano con una carta, tomo una carta al azar de ella y pregunto si la mano la contiene', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const hand = draw(card, empty(6))
    const randomCard = random(hand, cardSet)

    expect(includes(randomCard, hand)).toBeTruthy()
})

it('dada una mano con una carta, tomo una carta y pregunto si la mano la contiene', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const hand = draw(card, empty(6))

    expect(get(0, hand, cardSet)).toEqual(card)
})
