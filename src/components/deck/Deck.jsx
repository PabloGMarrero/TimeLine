import React from 'react'
import { generate as generateCardKey } from 'shortid'

import './Deck.css'
import { Card } from '../card/Card';
import { length } from '../../model/cards/cards'

const placeCardsOnDeck = (cards, length) => cards.map(card =>
    <div style={{ transform: `translateX(${(length++)}px)` }}>
        <Card {...card} flipped={true} visible={false}></Card>
    </div>).map(div => ({
        ...div,
        key: generateCardKey()
    }))

export const Deck = ({ cards }) =>
    <div className="deck-container">
        <section className="deck">
            {placeCardsOnDeck(cards, length())}
        </section>
    </div>