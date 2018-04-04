import React, { Component } from 'react';

import './Deck.css';

export class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: props.cards,
            shuffle: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ shuffle: !this.state.shuffle });
    }

    render = () => (
        <div>
            <div className="deck-container">
                <section className="deck">
                    {/* <figure className="first" onClick={this.handleClick}>{this.state.cards[0]}</figure> */}
                    <figure className={`first ${this.state.shuffle ? 'draw' : ''}`} onClick={this.handleClick}>
                        {this.state.cards[0]}
                </figure>
                    <figure className="second">{this.state.cards[1]}</figure>
                    <figure className="third">{this.state.cards[2]}</figure>
                    <figure className="fourth">{this.state.cards[3]}</figure>
                    <figure className="fifth">{this.state.cards[4]}</figure>
                    <figure className="sixth">{this.state.cards[2]}</figure>
                    <figure className="seventh">{this.state.cards[4]}</figure>
                    <figure className="eighth">{this.state.cards[4]}</figure>
                    <figure className="ninth">{this.state.cards[4]}</figure>
                    <figure className="tenth">{this.state.cards[4]}</figure>
                    <figure className="eleventh">{this.state.cards[4]}</figure>
                    <figure className="twelfth">{this.state.cards[4]}</figure>
                    <figure className="thirteenth">{this.state.cards[4]}</figure>
                    <figure className="fourteenth">{this.state.cards[4]}</figure>
                    <figure className="fifteenth">{this.state.cards[4]}</figure>
                    <figure className="sixteenth">{this.state.cards[4]}</figure>
                    <figure className="seventeenth">{this.state.cards[4]}</figure>
                    <figure className="eighteenth">{this.state.cards[4]}</figure>
                    <figure className="nineteenth">{this.state.cards[4]}</figure>
                    <figure className="twentieth">{this.state.cards[4]}</figure>
                </section>
            </div>
        </div>
    )

}