import React from 'react'
import { generate as generateCardKey } from 'shortid'

import './Board.css'
import Deck from '../../containers/Deck'
import BoardSlot from '../../containers/Board-Slot';

export const Board = ({ cardsOnPlay }) =>
    <div className="game-board">
        <div className="game-perspective">
            <div className="container">
                <div className="board">
                    <div className="cards">
                        <section className="in-game-cards">
                            {cardsOnPlay.map(cardSlot =>
                                <figure className={`board-slot-${cardSlot.index}`} key={generateCardKey()}>
                                    <BoardSlot cardSlot={cardSlot}></BoardSlot>
                                </figure>)}
                        </section>
                        <div className='deck'>
                            <Deck />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="face">
            <div className="bottom-face"></div>
        </div>
    </div>