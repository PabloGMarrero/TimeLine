import React, { Component } from 'react';

import "./Card.css"
import { CardSleeve } from '../card-sleeve/Card-Sleeve';

export class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: props.category,
            description: props.description,
            image: props.image,
            year: props.year,
            canBeFlipped: props.canBeFlipped,
            flipped: props.flipped,
            onDeck: props.onDeck,
            onHand: props.onHand,
            onBoard: props.onBoard,
            onEnemyPossession: props.onEnemyPossession,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.canBeFlipped) {
            this.setState({ flipped: !this.state.flipped });
        }
    }

    render = () => (
        (this.state.onEnemyPossession || this.state.onDeck) ? <CardSleeve></CardSleeve> :
            <div className="card-container">
                <div className={`card-view ${this.state.flipped ? 'flip' : ''}`} onClick={this.handleClick}>
                    <div className="card back" style={{ backgroundImage: 'url(' + this.state.image + ')' }}>
                        <div className="category">
                            <p>{this.state.category}</p>
                        </div>
                        <div className="year">
                            <p>{this.state.year}</p>
                        </div>
                        {this.viewYear}
                        <div className="description">
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                    <div className="card front" style={{ backgroundImage: 'url(' + this.state.image + ')' }}>
                        <div className="category">
                            <p>{this.state.category}</p>
                        </div>
                        <div className="description">
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    );

}