import React, { Component } from 'react'

import "./Hand.css"
import { CardSleeve } from '../card-sleeve/Card-Sleeve'
import { Card } from '../card/Card';

export class Hand extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: props.cards,
            owner: props.owner,
            isZooming: false,
            firstCardIsSelected: false,
            secondCardIsSelected: false,
            thirdCardIsSelected: false,
            fourthCardIsSelected: false,
            fifthCardIsSelected: false,
        }
        this.selectFirstCard = this.selectFirstCard.bind(this)
        this.selectSecondCard = this.selectSecondCard.bind(this)
        this.selectThirdCard = this.selectThirdCard.bind(this)
        this.selectFourthCard = this.selectFourthCard.bind(this)
        this.selectFifthCard = this.selectFifthCard.bind(this)
        this.cancelCardSelection = this.cancelCardSelection.bind(this)
        this.zoom = this.zoom.bind(this)
    }

    getFirstCard = () => this.state.cards[0]
    getSecondCard = () => this.state.cards[1]
    getThirdCard = () => this.state.cards[2]
    getFourthCard = () => this.state.cards[3]
    getFifthCard = () => this.state.cards[4]

    zoom = () => this.setState({
        isZooming: true
    })

    anyCardIsSelected = () => (this.state.firstCardIsSelected || this.state.secondCardIsSelected ||
        this.state.thirdCardIsSelected || this.state.fourthCardIsSelected || this.state.fifthCardIsSelected)

    cancelCardSelection() {
        this.setState({
            firstCardIsSelected: false,
            secondCardIsSelected: false,
            thirdCardIsSelected: false,
            fourthCardIsSelected: false,
            fifthCardIsSelected: false,
        })
    }

    selectFirstCard() {
        if (this.state.owner) {
            this.setState({
                firstCardIsSelected: true,
                secondCardIsSelected: false,
                thirdCardIsSelected: false,
                fourthCardIsSelected: false,
                fifthCardIsSelected: false,
            })
        }
    }

    selectSecondCard() {
        if (this.state.owner) {
            this.setState({
                firstCardIsSelected: false,
                secondCardIsSelected: true,
                thirdCardIsSelected: false,
                fourthCardIsSelected: false,
                fifthCardIsSelected: false,
            })
        }
    }

    selectThirdCard() {
        if (this.state.owner) {
            this.setState({
                firstCardIsSelected: false,
                secondCardIsSelected: false,
                thirdCardIsSelected: true,
                fourthCardIsSelected: false,
                fifthCardIsSelected: false,
            })
        }
    }

    selectFourthCard() {
        if (this.state.owner) {
            this.setState({
                firstCardIsSelected: false,
                secondCardIsSelected: false,
                thirdCardIsSelected: false,
                fourthCardIsSelected: true,
                fifthCardIsSelected: false,
            })
        }
    }

    selectFifthCard() {
        if (this.state.owner) {
            this.setState({
                firstCardIsSelected: false,
                secondCardIsSelected: false,
                thirdCardIsSelected: false,
                fourthCardIsSelected: false,
                fifthCardIsSelected: true,
            })
        }
    }

    firstCard = () => `${this.state.owner ? 'first cursor' : 'enemy-first'} ${this.state.firstCardIsSelected && 'first-picking'}`
    secondCard = () => `${this.state.owner ? 'second cursor' : 'enemy-second'} ${this.state.secondCardIsSelected && 'second-picking'}`
    thirdCard = () => `${this.state.owner ? 'third cursor' : 'enemy-third'} ${this.state.thirdCardIsSelected && 'third-picking'}`
    fourthCard = () => `${this.state.owner ? 'fourth cursor' : 'enemy-fourth'} ${this.state.fourthCardIsSelected && 'fourth-picking'}`
    fifthCard = () => `${this.state.owner ? 'fifth cursor' : 'enemy-fifth'} ${this.state.fifthCardIsSelected && 'fifth-picking'}`

    hover = () =>
        `
            animation-name: hover-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        `

    noHover = () =>
        `
            animation-name: no-animation;
        `


    render = () => (
        <div>
            <div className="hand-container">
                <section className="hand">
                    <figure className={this.firstCard()} onClick={this.selectFirstCard}>{this.getFirstCard()}</figure>
                    <figure className={this.secondCard()} onClick={this.selectSecondCard}>{this.getSecondCard()}</figure>
                    <figure className={this.thirdCard()} onClick={this.selectThirdCard}>{this.getThirdCard()}</figure>
                    <figure className={this.fourthCard()} onClick={this.selectFourthCard}>{this.getFourthCard()}</figure>
                    <figure className={this.fifthCard()} onClick={this.selectFifthCard}>{this.getFifthCard()}</figure>
                </section>
                {this.anyCardIsSelected() &&
                    (<section className="card-options">
                        <figure className="play-card-option cursor"></figure>
                        <figure className="look-card-option cursor" onClick={this.zoom}></figure>
                        <figure className="cancel-option cursor" onClick={this.cancelCardSelection}></figure>
                    </section>)}
            </div>
            <style>{`
                .hand .first > :hover {
                    ${this.state.firstCardIsSelected ? this.noHover() : this.hover()}
                }
                .hand .second > :hover {
                    ${this.state.secondCardIsSelected ? this.noHover() : this.hover()}
                }
                .hand .third > :hover {
                    ${this.state.thirdCardIsSelected ? this.noHover() : this.hover()}
                }
                .hand .fourth > :hover {
                    ${this.state.fourthCardIsSelected ? this.noHover() : this.hover()}
                }
                .hand .fifth > :hover {
                    ${this.state.fifthCardIsSelected ? this.noHover() : this.hover()}
                }
            `}
            </style>
        </div>

    )


}