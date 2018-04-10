import React, { Component } from 'react'

import "./Card.css"
import { CardSleeve } from '../card-sleeve/Card-Sleeve'

export class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category: props.category,
            description: props.description,
            image: props.image,
            year: props.year,
            owner: props.owner,
            flipped: props.flipped,
            selected: props.selected
        }
    }

    category = () => (
        <div className="category">
            <p>{this.state.category}</p>
        </div>
    )

    year = () => (
        <div className="year">
            <p>{this.state.year}</p>
        </div>
    )

    description = () => (
        <div className="description">
            <p>{this.state.description}</p>
        </div>
    )

    render = () => (
        <div className="card-container">
            <div className={`card-view ${this.state.flipped ? 'flip' : ''}`}>
                <div className={`card back ${this.state.selected && 'selected'}`} style={{ backgroundImage: 'url(' + this.state.image + ')' }}>
                    {this.category()}
                    {this.year()}
                    {this.description()}
                </div>
                <div className={`card ${this.state.selected && 'selected'}`} style={{ backgroundImage: 'url(' + this.state.image + ')' }}>
                    {this.category()}
                    {this.description()}
                </div>
            </div>
        </div>
    )

}