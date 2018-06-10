import React from 'react'
import { generate as generateCardKey } from 'shortid'

import './Deck.css'
import { Card } from '../card/Card'
import { length } from '../../model/cards/cards'

const placeCardsOnDeck = (deck, length) => {
    deck.map(card =>
        <div style={{ transform: `translateX(${(length++)}px)` }} key={generateCardKey()}>
            <Card {...card} flipped={true} visible={false}></Card>
        </div>)
}

export const Deck = ({ deck }) =>
    <div className="deck-container">
        <section className="deck">
            {placeCardsOnDeck(deck, length())}
        </section>
    </div>