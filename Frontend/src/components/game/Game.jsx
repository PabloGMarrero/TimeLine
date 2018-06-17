import React, { Component } from 'react'
import './Game.css'

import bgmMusic from '../../assets/bgm/Background-Music.mp3'
import Board from '../../containers/Board'
import Hand from '../../containers/Hand'
import { Turn, Phase } from '../../model/constants/constants'
import { cards, timelineHasAValidPeriod } from '../../model/cards/cards'
import { cards as cardsOnBoard } from '../../model/board/board'

export class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        this.props.startNewGame(cards())
    }

    static getDerivedStateFromProps(props) {

        if (props.turn === Turn.ENEMY && props.phase === Phase.MAIN_PHASE) {
            props.simulateTurn()
        }

        // if (props.phase === Phase.YEAR_RESOLUTION_PHASE) {
        //     if (!timelineHasAValidPeriod(cardsOnBoard(props.board, props.cards))) {
        //         props.performWrongPlayEvent()
        //     }
        //     props.moveToEndPhase()
        // }

        // if (props.phase === Phase.END_TURN_PHASE) {
        //     props.startNextTurn()
        // }

        return null
    }

    render = () =>
        <div className="game-container">

            <div className="game-body">
                <section className="enemy-hand-container">
                    <figure className='enemy-hand'>
                        <Hand hand={this.props.hands.enemyHand}></Hand>
                    </figure>
                </section>
                <div className="board-container">
                    <Board />
                </div>
                <figure className="player-hand">
                    <Hand hand={this.props.hands.playerHand}></Hand>
                </figure>
            </div>

            <audio className="bg-music" controls autoPlay loop>
                <source src={bgmMusic} type="audio/ogg"></source>
            </audio>

        </div>
}