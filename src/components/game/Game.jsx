import React, { Component } from 'react'
import './Game.css'

import { loadDeck } from '../../cards/cards'
import { Board } from '../board/Board'
import { Hand } from '../hand/Hand'
import { Card } from '../card/Card';
import * as shuffle from 'shuffle-array'

export class Game extends Component {

    state = {
        deck: loadDeck(),
        cardsOnPlay: [],
        cardsRemovedFromPlay: [],
        playerHand: [],
        enemyHand: [],
        selectedCard: null,
    }

    updateDeck = (deck) => this.setState({ deck })

    updatePlayerHand = (playerHand) => this.setState({ playerHand })

    updateEnemyHand = (enemyHand) => this.setState({ enemyHand })

    shuffleDeck = () => this.updateDeck(shuffle(this.state.deck))

    putCardInHand(card, hand) {
        var found = false;
        if (!found && hand[0] === undefined) {
            hand[0] = card
            found = true
        }
        if (!found && hand[1] === undefined) {
            hand[1] = card
            found = true
        }
        if (!found && hand[2] === undefined) {
            hand[2] = card
            found = true
        }
        if (!found && hand[3] === undefined) {
            hand[3] = card
            found = true
        }
        if (!found && hand[4] === undefined) {
            hand[4] = card
            found = true
        }
    }

    drawACardFromDeck(hand, owner) {
        const card = this.state.deck.pop()
        card.owner = owner;
        this.putCardInHand(card, hand);
        this.updateDeck(this.state.deck)
        owner ? this.updatePlayerHand(hand) : this.updateEnemyHand(hand)
    }

    playerDrawACardFromDeck = () => this.drawACardFromDeck(this.state.playerHand, true)

    playerDrawInitialsFiveCards() {
        this.playerDrawACardFromDeck()
        this.playerDrawACardFromDeck()
        this.playerDrawACardFromDeck()
        this.playerDrawACardFromDeck()
        this.playerDrawACardFromDeck()
    }

    enemyDrawInitialsFiveCards() {
        this.enemyDrawACardFromDeck()
        this.enemyDrawACardFromDeck()
        this.enemyDrawACardFromDeck()
        this.enemyDrawACardFromDeck()
        this.enemyDrawACardFromDeck()
    }

    playersDrawInitialFiveCards() {
        this.playerDrawInitialsFiveCards()
        this.enemyDrawInitialsFiveCards()
    }

    selectedCard = (selectedCard) => this.setState({ selectedCard })
    cancelCardSelection = () => this.setState({ selectedCard: null })

    enemyDrawACardFromDeck = () => this.drawACardFromDeck(this.state.enemyHand, false)

    clearPreviuslySelectedCard() {
        if (this.state.selectedCard) {
            this.state.selectedCard.selected = false
        }
        this.cancelCardSelection()
    }

    selectCardOnHand(selectedCard) {
        this.clearPreviuslySelectedCard()
        this.state.playerHand.find(card => card.key === selectedCard.key).selected = true
        this.selectedCard(selectedCard)
    }

    cancelCardSelectionOnHand(selectedCard) {
        this.state.playerHand.find(card => card.key === selectedCard.key).selected = false
        this.cancelCardSelection()
    }

    componentDidMount() {
        this.shuffleDeck()
        this.playersDrawInitialFiveCards()
    }

    hand = (hand) =>
        <Hand
            firstCard={hand[0]}
            secondCard={hand[1]}
            thirdCard={hand[2]}
            fourthCard={hand[3]}
            fifthCard={hand[4]}
            selectedCard={this.state.selectedCard}
            selectCardHandler={this.selectCardOnHand.bind(this)}
            cancelSelectionHandler={this.cancelCardSelectionOnHand.bind(this)}>
        </Hand>

    board = () => <Board deck={this.state.deck} cardsOnPlay={this.state.cardsOnPlay}></Board>


    render = () => (
        <div className="game-container">
            <div className="game-body">
                <section className="enemy-hand-container">
                    <figure className='enemy-hand'>
                        {this.hand(this.state.enemyHand)}
                    </figure>
                </section>
                <div className="board-container">
                    {this.board()}
                </div>
                <figure className='player-hand'>
                    {this.hand(this.state.playerHand)}
                </figure>
            </div>
            <audio className="bg-music" controls autoPlay loop>
                <source src="../assets/bgm/Background-Music.mp3" type="audio/ogg"></source>
            </audio>
        </div>
    )

}