import React, { Component } from 'react'
import './Game.css'

import bgmMusic from "../../assets/bgm/Background-Music.mp3"
import Board from '../../containers/Board'
import Hand from '../../containers/Hand'

export class Game extends Component {

    state = {
        isShowingCardChoices: false
    }

    componentDidMount() {
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
                    <Board isShowingCardChoices={this.state.isShowingCardChoices}></Board>
                </div>
                <figure className='player-hand'>
                    <Hand hand={this.props.hands.playerHand}></Hand>
                </figure>
            </div>
            <audio className="bg-music" controls autoPlay loop>
                <source src={bgmMusic} type="audio/ogg"></source>
            </audio>
        </div>
}