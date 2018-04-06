import React, { Component } from 'react';

import './Deck.css';
import { CardSleeve } from '../card-sleeve/Card-Sleeve';

export class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
            cardsSize: props.cards.length,
        }
    }


    deck = () => (
        this.state.cards.map((card =>
            <div style={{
                transform: `translateX(${(this.state.cardsSize--)}px)`
            }}>
                <CardSleeve></CardSleeve>
            </div>
        ))
    )

    render = () => (
        <div>
            <div className="deck-container">
                <section className="deck">
                    {this.deck()}
                </section>
            </div>
        </div>
    )

}