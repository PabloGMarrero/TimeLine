import React from 'react'

import './Deck.css'
import { Card } from '../card/Card';
import { deckSize } from '../../model/cards/cards'

const placeCardsOnDeck = (cards, deckSize) => cards.map(card =>
    <div style={{ transform: `translateX(${(deckSize++)}px)` }}>
        <Card {...card} flipped={true} visible={false}></Card>
    </div>)

export const Deck = ({ cards }) =>
    <div className="deck-container">
        <section className="deck">
            {placeCardsOnDeck(cards, deckSize())}
        </section>
    </div>