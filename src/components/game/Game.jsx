import React, { Component } from 'react'
import './Game.css'

import bgmMusic from '../../assets/bgm/Background-Music.mp3'
import Board from '../../containers/Board'
import Hand from '../../containers/Hand'
import { Turn, Phase } from '../../model/constants/constants'

export class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.startNewGame()
    }

    static getDerivedStateFromProps(props) {
        if (props.turn === Turn.ENEMY && props.phase === Phase.MAIN_PHASE) {
            props.simulateTurn()
        }
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