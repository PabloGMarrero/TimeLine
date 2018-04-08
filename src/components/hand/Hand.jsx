import React, { Component } from 'react';

import "./Hand.css"
import { CardSleeve } from '../card-sleeve/Card-Sleeve';

export class Hand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
            owner: props.owner,
        }
    }

    render = () => (
        <div>
            <div className="hand-container">
                <section className="hand">
                    <figure className={`${this.state.owner ? 'first' : 'enemy-first'}`}>{this.state.cards[0]}</figure>
                    <figure className={`${this.state.owner ? 'second' : 'enemy-second'}`}>{this.state.cards[1]}</figure>
                    <figure className={`${this.state.owner ? 'third' : 'enemy-third'}`}>{this.state.cards[2]}</figure>
                    <figure className={`${this.state.owner ? 'fourth' : 'enemy-fourth'}`}>{this.state.cards[3]}</figure>
                    <figure className={`${this.state.owner ? 'fifth' : 'enemy-fifth'}`}>{this.state.cards[4]}</figure>
                </section>
            </div>
        </div>
    )


}