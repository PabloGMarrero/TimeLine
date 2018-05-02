import React from 'react'

import './Board.css'
import { Deck } from '../deck/Deck'
import { BoardSlot } from '../board-slot/Board-Slot';

const cardsOnBoard = (cardsOnPlay, isShowingCardChoices, placeCardHandler, selectedCard) =>
    cardsOnPlay.map(cardSlot =>
        <figure className={`board-slot-${cardSlot.index}`}>
            <BoardSlot cardSlot={cardSlot} isShowingCardChoices={isShowingCardChoices}
                placeCardHandler={placeCardHandler} selectedCard={selectedCard}></BoardSlot>
        </figure>)

export const Board = ({ deck, cardsOnPlay, isShowingCardChoices, placeCardHandler, selectedCard }) =>
    <div className="game-board">
        <div className="game-perspective">
            <div className="container">
                <div className="board">
                    <div className="cards">
                        <section className="in-game-cards">
                            {cardsOnBoard(cardsOnPlay, isShowingCardChoices, placeCardHandler, selectedCard)}
                        </section>
                        <div className='deck'>
                            <Deck cards={deck}></Deck>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="face">
            <div className="bottom-face"></div>
        </div>
    </div>