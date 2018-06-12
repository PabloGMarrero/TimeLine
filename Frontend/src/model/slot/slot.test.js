import { head } from 'ramda'
import { cards } from '../cards/cards'
import { slot, empty, get, set, clear, isEmpty, cardkeyOf, includes, indexOf, keyOf, replace } from './slot'

it('dado un slot al cual seteo una carta, pruebo si el slot continene la carta', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const slot = set(card, empty(1))

    expect(includes(card, slot)).toBeTruthy()
})

it('dado un slot al cual seteo una carta, al obtenerla del slot y comparo sus keys', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const slot = set(card, empty(1))

    expect(get(slot, cardSet).key).toEqual(card.key)
})

it('dado un slot al cual seteo una carta y al hacerle clear , pregunto si esta vacia', () => {
    const cardSet = cards()
    const card = head(cardSet)
    const slot = set(card, empty(1))

    expect(isEmpty(clear(slot))).toBeTruthy()
})

it('dado un slot al cual asigno una cardkey manualmente, pregunto si su cardkey es la anterior dada', () => {
    const aSlot = slot('cardkey', 0, 'key')

    expect(cardkeyOf(aSlot)).toEqual('cardkey')
})

it('dado un slot al cual asigno un index manualmente, pregunto si su index es el anterior dado', () => {
    const aSlot = slot('cardkey', 0, 'key')

    expect(indexOf(aSlot)).toEqual(0)
})

it('dado un slot al cual asigno una key manualmente, pregunto si su key es la anterior dada', () => {
    const aSlot = slot('cardkey', 0, 'key')

    expect(keyOf(aSlot)).toEqual('key')
})

it('dado una cardkey y un slot, reemplazo la cardkey del slot por la dada', () => {
    const slotCardkey = 'newCardkey'
    const aSlot = slot('cardkey', 0, 'key')
    const newSlot = replace(slotCardkey, aSlot)

    expect(cardkeyOf(newSlot)).toEqual('newCardkey')
    expect(indexOf(newSlot)).toEqual(0)
    expect(keyOf(newSlot)).toEqual('key')
})