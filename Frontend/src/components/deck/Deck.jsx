import React from 'react'
import { always, map, applyTo } from 'ramda'
import { generate as generateCardKey } from 'shortid'

import './Deck.css'
import { size } from '../../model/cards/cards'
import { CardSleeve } from '../card-sleeve/Card-Sleeve'

const placeSleeve = (displacement) =>
    <div style={{ transform: `translateX(${(displacement)}px)` }} key={generateCardKey()}>
        <CardSleeve />
    </div>

const placeSleeves = (deck, displacement) =>
    map((_) => applyTo(_, always(placeSleeve(displacement++))), deck)

export const Deck = ({ deck, cards }) =>
    <div className="deck-container">
        <section className="deck">
            {placeSleeves(deck, size(cards))}
        </section>
    </div>