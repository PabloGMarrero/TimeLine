import React, { Component } from 'react';

import "./Hand.css"
import { CardSleeve } from '../card-sleeve/Card-Sleeve';

export class Hand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
            owner: props.owner,
            picking: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ picking: !this.state.picking });
    }

    firstCard = () => (
        this.state.owner ?
            <figure className="first">{this.state.cards[0]}</figure> :
            <figure className="enemy-first"><CardSleeve></CardSleeve></figure>
    )

    secondCard = () => (
        this.state.owner ?
            <figure className="second">{this.state.cards[1]}</figure> :
            <figure className="enemy-second"><CardSleeve></CardSleeve></figure>
    )

    thirdCard = () => (
        this.state.owner ?
            <figure className="third">{this.state.cards[2]}</figure> :
            <figure className="enemy-third"><CardSleeve></CardSleeve></figure>
    )

    fourthCard = () => (
        this.state.owner ?
            <figure className="fourth">{this.state.cards[3]}</figure> :
            <figure className="enemy-fourth"><CardSleeve></CardSleeve></figure>
    )

    fifthCard = () => (
        this.state.owner ?
            <figure className="fifth">{this.state.cards[4]}</figure> :
            <figure className="enemy-fifth"><CardSleeve></CardSleeve></figure>
    )

    render = () => (
        <div>
            <div className="hand-container">
                <section className="hand">
                    {this.firstCard()}
                    {this.secondCard()}
                    {this.thirdCard()}
                    {this.fourthCard()}
                    {this.fifthCard()}
                </section>
            </div>
        </div>
    )


}