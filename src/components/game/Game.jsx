import React, { Component } from 'react'
import './Game.css'

import { loadDeck } from '../../model/cards/cards'
import { Board } from '../board/Board'
import { Hand } from '../hand/Hand'
import { Card } from '../card/Card';
import shuffle from 'shuffle-array'
import { setTimeout } from 'core-js';

export class Game extends Component {

    state = {
        deck: loadDeck(),
        cardsOnBoard:
            [
                { card: undefined, index: 0 }, { card: undefined, index: 1 },
                { card: undefined, index: 2 }, { card: undefined, index: 3 },
                { card: undefined, index: 4 }, { card: undefined, index: 5 }
            ],
        cardsRemovedFromPlay: [],
        playerHand:
            [
                { card: undefined, index: 0 }, { card: undefined, index: 1 },
                { card: undefined, index: 2 }, { card: undefined, index: 3 }, { card: undefined, index: 4 }
            ],
        enemyHand:
            [
                { card: undefined, index: 0 }, { card: undefined, index: 1 },
                { card: undefined, index: 2 }, { card: undefined, index: 3 }, { card: undefined, index: 4 }
            ],
        selectedCard: null,
        isShowingCardChoices: false,
    }

    updateDeck = (deck) => this.setState({ deck })

    updatePlayerHand = (playerHand) => this.setState({ playerHand })

    updateEnemyHand = (enemyHand) => this.setState({ enemyHand })

    updateCardsOnBoard = (cardsOnBoard) => this.setState({ cardsOnBoard })

    showCardChoices = () => this.setState({ isShowingCardChoices: true })

    hideCardChoices = () => this.setState({ isShowingCardChoices: false })

    shuffleDeck = () => this.updateDeck(shuffle(this.state.deck))

    pickCardFromDeck = () => this.state.deck.pop()

    drawACardFromDeck(hand, owner) {
        const card = this.pickCardFromDeck()
        card.owner = owner;
        this.putCardInHand(card, hand);
        this.updateDeck(this.state.deck)
        owner ? this.updatePlayerHand(hand) : this.updateEnemyHand(hand)
    }

    playerDrawACardFromDeck = () => this.drawACardFromDeck(this.state.playerHand, true)

    enemyDrawACardFromDeck = () => this.drawACardFromDeck(this.state.enemyHand, false)

    playerDrawInitialsFiveCards() {
        setTimeout(() => {
            this.playerDrawACardFromDeck()
        }, 300);
        setTimeout(() => {
            this.playerDrawACardFromDeck()
        }, 900);
        setTimeout(() => {
            this.playerDrawACardFromDeck()
        }, 1500);
        setTimeout(() => {
            this.playerDrawACardFromDeck()
        }, 2100);
        setTimeout(() => {
            this.playerDrawACardFromDeck()
        }, 2700);
    }

    enemyDrawInitialsFiveCards() {
        setTimeout(() => {
            this.enemyDrawACardFromDeck()
        }, 600);
        setTimeout(() => {
            this.enemyDrawACardFromDeck()
        }, 1200);
        setTimeout(() => {
            this.enemyDrawACardFromDeck()
        }, 1800);
        setTimeout(() => {
            this.enemyDrawACardFromDeck()
        }, 2400);
        setTimeout(() => {
            this.enemyDrawACardFromDeck()
        }, 3000);
    }

    playersDrawInitialFiveCards() {
        this.playerDrawInitialsFiveCards()
        this.enemyDrawInitialsFiveCards()
    }

    selectedCard = (selectedCard) => this.setState({ selectedCard })

    cancelCardSelection = () => this.setState({ selectedCard: null })

    getSlotsWithCardsInHand = (hand) => hand.filter(slot => slot.card !== undefined)

    clearPreviuslySelectedCard() {
        if (this.state.selectedCard) {
            this.state.selectedCard.selected = false
        }
    }

    updateCardSelectionState(card, isSelected) {
        this.clearPreviuslySelectedCard()
        const updatedSlot = this.getSlotsWithCardsInHand(this.state.playerHand).find(slot => slot.card.key === card.key)
        updatedSlot.card.selected = isSelected
        this.updatePlayerHand(this.state.playerHand)
        if (isSelected) {
            this.selectedCard(card)
        }
        else {
            this.cancelCardSelection()
        }
        this.hideCardChoices()
    }

    selectCardOnHand = (card) => this.updateCardSelectionState(card, true)

    cancelCardSelectionOnHand = (card) => this.updateCardSelectionState(card, false)

    putCardInHand(card, hand) {
        hand.find(slot => slot.card === undefined).card = card
    }

    removeCardInHand(card, hand) {
        const handSlot = this.getSlotsWithCardsInHand(hand).find(slot => slot.card.key === card.key)
        if (handSlot) {
            hand[handSlot.index].card = undefined
        }
    }

    revealCard(card) {
        setTimeout(() => {
            card.flipped = true
            this.updateCardsOnBoard(this.state.cardsOnBoard)
        }, 1000);
    }

    playInitialCard() {
        const card = this.pickCardFromDeck()
        setTimeout(() => {
            this.playCard(3, card, true)
            this.updateDeck(this.state.deck)
        }, 3300);
    }

    playCard(index, card, initial = false) {
        if (initial || this.state.isShowingCardChoices) {
            this.clearPreviuslySelectedCard()
            this.state.cardsOnBoard[index] = { card, index }
            this.updateCardsOnBoard(this.state.cardsOnBoard)
            this.removeCardInHand(card, this.state.playerHand)
            this.cancelCardSelection()
            this.hideCardChoices()
            this.revealCard(card)
        }
    }

    playSelectedCard = (index) => this.playCard(index, this.state.selectedCard)

    componentDidMount() {
        this.shuffleDeck()
        this.playersDrawInitialFiveCards()
        this.playInitialCard()
    }

    hand = (hand) =>
        <Hand
            firstCard={hand[0].card}
            secondCard={hand[1].card}
            thirdCard={hand[2].card}
            fourthCard={hand[3].card}
            fifthCard={hand[4].card}
            selectedCard={this.state.selectedCard}
            selectCardHandler={this.selectCardOnHand}
            cancelSelectionHandler={this.cancelCardSelectionOnHand}
            showPlacesChoicesHandler={this.showCardChoices}>
        </Hand>

    board = () => <Board
        deck={this.state.deck}
        cardsOnPlay={this.state.cardsOnBoard}
        isShowingCardChoices={this.state.isShowingCardChoices}
        placeCardHandler={this.playSelectedCard}
        selectedCard={this.state.selectedCard}>
    </Board >

    render = () =>
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

}