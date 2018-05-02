import React, { Component } from 'react'
import './Game.css'

import { loadDeck } from '../../model/cards/cards'
import { Board } from '../board/Board'
import { Hand } from '../hand/Hand'
import { Card } from '../card/Card';
import { setTimeout } from 'core-js';
import {hand, getSlotsWithCardsInHand, putCardInHand, getCardOnHandWithIndex, removeCardInHand, getSlotWithCard} from '../../model/hands/hands'
import {pickCardFromDeck, shuffleDeck} from '../../model/deck/deck'
import {getCardFromSlot} from '../../model/slot/slot'
import {cardsBoard, putCardInBoardAtIndex} from '../../model/board/board'

export class Game extends Component {

    state = {
        deck: loadDeck(),
        cardsOnBoard: cardsBoard(6),
        cardsRemovedFromPlay: [],
        playerHand: hand(5),
        enemyHand: hand(5),
        selectedCard: null,
        isShowingCardChoices: false,
    }

    updateDeck = (deck) => this.setState({ deck })

    updatePlayerHand = (playerHand) => this.setState({ playerHand })

    updateEnemyHand = (enemyHand) => this.setState({ enemyHand })

    updateCardsOnBoard = (cardsOnBoard) => this.setState({ cardsOnBoard })

    showCardChoices = () => this.setState({ isShowingCardChoices: true })

    hideCardChoices = () => this.setState({ isShowingCardChoices: false })

    updateDeckAtShuffle =  () => this.updateDeck(shuffleDeck((this.state.deck)))

    drawACardFromDeck(hand, owner) {
        const card = pickCardFromDeck(this.state.deck)
        card.owner = owner;
        putCardInHand(card, hand);
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

    clearPreviuslySelectedCard() {
        if (this.state.selectedCard) {
            this.state.selectedCard.selected = false
        }
    }

    updateCardSelectionState(card, isSelected) {
        this.clearPreviuslySelectedCard()
        getCardFromSlot(getSlotWithCard(card, this.state.playerHand)).selected = isSelected

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

    revealCard(card) {
        setTimeout(() => {
            card.flipped = true
            this.updateCardsOnBoard(this.state.cardsOnBoard)
        }, 1000);
    }

    playInitialCard() {
        const card =  pickCardFromDeck(this.state.deck)
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
            removeCardInHand(card, this.state.playerHand) 
            this.cancelCardSelection()
            this.hideCardChoices()
            this.revealCard(card)
        }
    }

    playSelectedCard = (index) => this.playCard(index, this.state.selectedCard)

    componentDidMount() {
        this.updateDeckAtShuffle()
        this.playersDrawInitialFiveCards()
        this.playInitialCard()
    }

    hand = (hand) =>
        <Hand
            firstCard=  {getCardOnHandWithIndex(hand, 0)} 
            secondCard={getCardOnHandWithIndex(hand, 1)}
            thirdCard={getCardOnHandWithIndex(hand, 2)} 
            fourthCard={getCardOnHandWithIndex(hand, 3)} 
            fifthCard={getCardOnHandWithIndex(hand, 4)} 
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