import React, { Component } from 'react';

import "./Hand.css"

export class Hand extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
            picking: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ picking: !this.state.picking });
    }

    render = () => (
        <div>
            <div className="hand-container">
                <section className="hand">
                    <figure className="first">{this.state.cards[0]}</figure>
                    <figure className="second">{this.state.cards[1]}</figure>
                    <figure className="third">{this.state.cards[2]}</figure>
                    <figure className="fourth">{this.state.cards[3]}</figure>
                    <figure className="fifth">{this.state.cards[4]}</figure>
                </section>
            </div>
        </div>
    )


}