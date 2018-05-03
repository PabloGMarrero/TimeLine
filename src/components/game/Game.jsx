import React, { Component } from 'react'
import './Game.css'

import bgmMusic from "../../assets/bgm/Background-Music.mp3"
import { Board } from '../board/Board'
import { Hand } from '../hand/Hand'
import * as handModule from '../../model/hands/hands'

export class Game extends Component {

    state = {
        isShowingCardChoices: false
    }

    // updatePlayerHand = (playerHand) => this.setState({ playerHand })
    // updateEnemyHand = (enemyHand) => this.setState({ enemyHand })
    // updateCardsOnBoard = (cardsOnBoard) => this.setState({ cardsOnBoard })
    // showCardChoices = () => this.setState({ isShowingCardChoices: true })
    // hideCardChoices = () => this.setState({ isShowingCardChoices: false })
    // updateDeckAtShuffle = () => this.updateDeck(shuffleDeck((this.state.deck)))


    // drawACardFromDeck(hand, owner) {
    //     const card = pickCardFromDeck(this.state.deck)
    //     card.owner = owner;
    //     putCardInHand(card, hand);
    //     this.updateDeck(this.state.deck)
    //     owner ? this.updatePlayerHand(hand) : this.updateEnemyHand(hand)
    // }

    // playerDrawACardFromDeck = () => this.drawACardFromDeck(this.state.playerHand, true)
    // enemyDrawACardFromDeck = () => this.drawACardFromDeck(this.state.enemyHand, false)

    // playerDrawInitialsFiveCards() {
    //     setTimeout(() => {
    //         this.playerDrawACardFromDeck()
    //     }, 300);
    //     setTimeout(() => {
    //         this.playerDrawACardFromDeck()
    //     }, 900);
    //     setTimeout(() => {
    //         this.playerDrawACardFromDeck()
    //     }, 1500);
    //     setTimeout(() => {
    //         this.playerDrawACardFromDeck()
    //     }, 2100);
    //     setTimeout(() => {
    //         this.playerDrawACardFromDeck()
    //     }, 2700);
    // }

    // enemyDrawInitialsFiveCards() {
    //     setTimeout(() => {
    //         this.enemyDrawACardFromDeck()
    //     }, 600);
    //     setTimeout(() => {
    //         this.enemyDrawACardFromDeck()
    //     }, 1200);
    //     setTimeout(() => {
    //         this.enemyDrawACardFromDeck()
    //     }, 1800);
    //     setTimeout(() => {
    //         this.enemyDrawACardFromDeck()
    //     }, 2400);
    //     setTimeout(() => {
    //         this.enemyDrawACardFromDeck()
    //     }, 3000);
    // }

    // playersDrawInitialFiveCards() {
    //     this.playerDrawInitialsFiveCards()
    //     this.enemyDrawInitialsFiveCards()
    // }

    // selectedCard = (selectedCard) => this.setState({ selectedCard })

    // cancelCardSelection = () => this.setState({ selectedCard: null })

    // clearPreviuslySelectedCard() {
    //     if (this.state.selectedCard) {
    //         this.state.selectedCard.selected = false
    //     }
    // }

    // updateCardSelectionState(card, isSelected) {
    //     this.clearPreviuslySelectedCard()
    //     getCardFromSlot(getSlotWithCard(card, this.state.playerHand)).selected = isSelected

    //     this.updatePlayerHand(this.state.playerHand)
    //     if (isSelected) {
    //         this.selectedCard(card)
    //     }
    //     else {
    //         this.cancelCardSelection()
    //     }
    //     this.hideCardChoices()
    // }

    // selectCardOnHand = (card) => this.updateCardSelectionState(card, true)

    // cancelCardSelectionOnHand = (card) => this.updateCardSelectionState(card, false)

    // revealCard(card) {
    //     setTimeout(() => {
    //         card.flipped = true
    //         this.updateCardsOnBoard(this.state.cardsOnBoard)
    //     }, 1000);
    // }

    // playInitialCard() {
    //     const card = pickCardFromDeck(this.state.deck)
    //     setTimeout(() => {
    //         this.playCard(3, card, true)
    //         this.updateDeck(this.state.deck)
    //     }, 3300);
    // }

    // playCard(index, card, initial = false) {
    //     if (initial || this.state.isShowingCardChoices) {
    //         this.clearPreviuslySelectedCard()
    //         this.state.cardsOnBoard[index] = { card, index }
    //         this.updateCardsOnBoard(this.state.cardsOnBoard)
    //         removeCardInHand(card, this.state.playerHand)
    //         this.cancelCardSelection()
    //         this.hideCardChoices()
    //         this.revealCard(card)
    //     }
    // }

    // playSelectedCard = (index) => this.playCard(index, this.state.selectedCard)

    componentDidMount() {
        // this.props.startGame(this.props.deck)

        this.props.shuffleDeck()
        this.props.playerDrawCard()
        this.props.playerDrawCard()
        this.props.playerDrawCard()
        this.props.playerDrawCard()
        this.props.playerDrawCard()
        this.props.enemyDrawCard()
        this.props.enemyDrawCard()
        this.props.enemyDrawCard()
        this.props.enemyDrawCard()
        this.props.enemyDrawCard()
        this.props.playInitialCardFromDeck()

        // this.updateDeckAtShuffle()
        // this.playersDrawInitialFiveCards()
        // this.playInitialCard()
    }

    hand = (hand) =>
        <Hand
            firstCard={handModule.get(hand, 0)}
            secondCard={handModule.get(hand, 1)}
            thirdCard={handModule.get(hand, 2)}
            fourthCard={handModule.get(hand, 3)}
            fifthCard={handModule.get(hand, 4)}
            owner={hand.owner}
            selectedCard={this.props.selectedCard}
            // selectCardHandler={this.selectCardOnHand}
            // cancelSelectionHandler={this.cancelCardSelectionOnHand}
            // showPlacesChoicesHandler={this.showCardChoices}>
            selectCardHandler={() => { }}
            cancelSelectionHandler={() => { }}
            showPlacesChoicesHandler={() => { }}>
        </Hand>

    board = () => <Board
        deck={this.props.deck}
        cardsOnPlay={this.props.board}
        selectedCard={this.props.selectedCard}
        isShowingCardChoices={this.state.isShowingCardChoices}
        // placeCardHandler={this.playSelectedCard}
        placeCardHandler={() => { }}>
    </Board >

    render = () =>
        <div className="game-container">
            <div className="game-body">
                <section className="enemy-hand-container">
                    <figure className='enemy-hand'>
                        {this.hand(this.props.enemyHand)}
                    </figure>
                </section>
                <div className="board-container">
                    {this.board()}
                </div>
                <figure className='player-hand'>
                    {this.hand(this.props.playerHand)}
                </figure>
            </div>
            <audio className="bg-music" controls autoPlay loop>
                <source src={bgmMusic} type="audio/ogg"></source>
            </audio>
        </div>

}