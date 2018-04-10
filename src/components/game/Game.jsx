import React, { Component } from 'react'
import './Game.css'
import { Board } from '../board/Board'
import { Hand } from '../hand/Hand'
import * as shuffle from 'shuffle-array'

export class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deck: props.deck,
            cardsOnPlay: [],
            playerHand: [],
            enemyHand: [],
        }
    }

    updateDeck(updatedDeck) {
        this.setState({
            deck: updatedDeck
        })
    }

    updatePlayerHand(updatedPlayerHand) {
        this.setState({
            playerHand: updatedPlayerHand
        })
    }

    shuffleDeck() {
        this.updateDeck(shuffle(this.state.deck))
    }

    pickInitialCards(hand) {
        const deck = this.state.deck
        hand[0] = deck.pop()
        hand[1] = deck.pop()
        hand[2] = deck.pop()
        hand[3] = deck.pop()
        hand[4] = deck.pop()
        this.updateDeck(deck)
        this.updatePlayerHand(hand)
    }

    playerPickCards() {
        this.pickInitialCards(this.state.playerHand)
    }

    enemyPickCards() {
        this.pickInitialCards(this.state.enemyHand)
    }

    pickInitialCardsForAllPlayers() {
        this.playerPickCards()
        this.enemyPickCards()
    }

    componentDidMount() {
        this.shuffleDeck()
        this.pickInitialCardsForAllPlayers()
    }

    render = () => (
        <div className="game-container">
            <div className="game-body">
                <section className="enemy-hand-container">
                    <figure className='enemy-hand'>
                        <Hand cards={this.state.enemyHand} owner={false}></Hand>
                    </figure>
                </section>
                <div className="board-container">
                    <Board deck={this.state.deck}></Board>
                </div>
                <figure className='player-hand'>
                    <Hand cards={this.state.playerHand} owner={true}></Hand>
                </figure>
            </div>
            <audio className="bg-music" controls autoPlay loop>
                <source src="../assets/bgm/Background-Music.mp3" type="audio/ogg"></source>
            </audio>
        </div>
    )

}