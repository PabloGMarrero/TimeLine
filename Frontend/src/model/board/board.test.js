import { head, nth, all } from 'ramda'
import { cards } from '../cards/cards'
import { get, empty, play, remove, cards as cardsOnBoard, isEmpty, includes } from './board'

it('dado un tablero vacio, pregunto si efectivamente esta vacio', () => {
    const board = empty(6)

    expect(isEmpty(board)).toBeTruthy()
})

it('dado un tablero con una carta jugada, tomo una carta y pregunto si el tablero la contiene', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const board = play(card, 3, empty(6))
    const slot = nth(3, board)

    expect(get(slot, cardSet)).toEqual(card)
})

it('dado un tablero con una carta jugada, remuevo esa  carta y pregunto si el tablero ya no contine esa carta', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const board = remove(card, play(card, 3, empty(6)))

    expect(includes(card, board)).toBeFalsy()

})

it('dado un tablero con tres cartas jugadas, obtengo la lista de todas las cartas del tablero y preguntos si las contiene', () => {
    const cardSet = cards()
    const firstCard = nth(0, cardSet)
    const secondCard = nth(1, cardSet)
    const thirdCard = nth(2, cardSet)
    const board = play(thirdCard, 1, play(secondCard, 2, play(firstCard, 3, empty(6))))
    const playedCards = cardsOnBoard(board, cardSet)


    expect(all((_ => (includes(_, board))), playedCards)).toBeTruthy()

})