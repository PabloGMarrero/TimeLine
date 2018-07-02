import { length, head, any } from 'ramda'
import {
    cards,
    size,
    reveal,
    isRevelated,
    selectCard,
    isSelected,
    deselectCards,
    timelineHasAValidPeriod
} from './cards'

it('dada una timeline valida, pregunto si la timeline es valida', () => {
    const cardSet = [{ year: 1653 }, { year: 1912 }, { year: 1957 }]

    expect(timelineHasAValidPeriod(cardSet)).toBeTruthy()
})

it('dada un cardSet, cuando pregunto su tamaño, responde con su tamaño correcto', () => {
    const cardSet = cards()

    expect(size(cardSet)).toEqual(length(cards()))
})

it('dada un cardSet donde revelo una carta, luego pregunto si hay una carta revelada en ese cardset', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const setWithRevelatedCard = reveal(card, cardSet)

    expect(any(isRevelated, setWithRevelatedCard)).toBeTruthy()
})

it('dada un cardSet donde selecciono una carta, luego pregunto si hay una carta seleccionada en ese cardset', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const setWithSelectedCard = selectCard(card, cardSet)

    expect(any(isSelected, setWithSelectedCard)).toBeTruthy()
})

it('dada un cardSet donde selecciono una carta y la deselecciono,luego verifico que no haya carta seleccionada', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const setWithSelectedCard = deselectCards(selectCard(card, cardSet))

    expect(any(isSelected, setWithSelectedCard)).toBeFalsy()
})
