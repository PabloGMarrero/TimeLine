import React, { Component } from 'react'

import './Deck.css'
import { CardSleeve } from '../card-sleeve/Card-Sleeve'
import { Card } from '../card/Card';

export class Deck extends Component {

    state = {
        xOffset: this.props.cards.length,
    }

    render = () => (
        <div>
            <div className="deck-container">
                <section className="deck">
                    {this.props.cards.map(card =>
                        <div style={{ transform: `translateX(${(this.state.xOffset--)}px)` }}>
                            <Card {...card} flipped={true} visible={false}></Card>
                        </div>)}
                </section>
            </div>
        </div>
    )
}