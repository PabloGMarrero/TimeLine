import React, { Component } from 'react'

import './Deck.css'
import { Card } from '../card/Card';
import { loadDeck } from '../../model/cards/cards'

export class Deck extends Component {

    state = {
        deckCardDisplacement: this.props.cards.length,
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.deckCardDisplacement = loadDeck().length;
    }

    render = () => (
        <div>
            <div className="deck-container">
                <section className="deck">
                    {this.props.cards.map(card =>
                        <div style={{ transform: `translateX(${(this.state.deckCardDisplacement++)}px)` }}>
                            <Card {...card} flipped={true} visible={false}></Card>
                        </div>)}
                </section>
            </div>
        </div>
    )
}