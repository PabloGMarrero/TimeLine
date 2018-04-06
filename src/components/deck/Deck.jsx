import React, { Component } from 'react';

import './Deck.css';
import { CardSleeve } from '../card-sleeve/Card-Sleeve';

export class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
            cardsSize: props.cards.length,
            shuffle: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ shuffle: !this.state.shuffle });
    }

    deck = () => (
        this.state.cards.map((card =>
            <div style={{
                order: this.state.index,
                zIndex: this.state.index,
                transform: `translateX(${(this.state.cardsSize--) * 1}px)`
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