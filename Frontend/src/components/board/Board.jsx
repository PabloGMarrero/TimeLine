import React, { Component } from 'react'
import { generate as generateCardKey } from 'shortid'

import './Board.css'
import Deck from '../../containers/Deck'
import BoardSlot from '../../containers/Board-Slot'


export class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
        //viewport [c0,c1,c2,c3,c4,c5]
        }
    }

    render = () =>
        <div className="game-board">
            <div className="game-perspective">
                <div className="container">
                    <div className="board">
                        <div className="cards">
                            <section className="in-game-cards">
                                {this.props.board.map(slot =>
                                    <figure className={`board-slot-${slot.index}`} key={generateCardKey()}>
                                        <BoardSlot slot={slot} />
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

}