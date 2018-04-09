import React, { Component } from 'react';

import './Board.css';
import { Card } from '../card/Card';
import { Hand } from '../hand/Hand';
import { Deck } from '../deck/Deck';

export class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: props.deck,
            cardsOnPlay: [],
            playerHand: props.playerHand,
            enemyHand: props.enemyHand,
        }
    }

    render = () => (
        <div className="game-board">
            <div className="game-perspective">
                <div className='enemy-hand-container'>
                    <figure className='enemy-hand'>
                        <Hand cards={this.state.enemyHand} owner={false}></Hand>
                    </figure>
                </div>
                <div className="container">
                    <div className="board">
                        <section className="cards">
                            <figure className='in-game-card'>
                                <Card
                                    category={'♫'}
                                    description={'Ludwig van Beethoven'}
                                    image={'../assets/images/cards/beethoven.jpg'}
                                    year={1770}
                                    canBeFlipped={true}
                                    flipped={false}
                                    onDeck={false}
                                    onHand={false}
                                    onBoard={false}
                                    onEnemyPossession={false}>
                                </Card>
                            </figure>
                            <figure className='deck'>
                                <Deck cards={this.state.deck}></Deck>
                            </figure>
                        </section>
                    </div>
                </div>
            </div>
            <figure className='player-hand'>
                <Hand cards={this.state.playerHand} owner={true}></Hand>
            </figure>
            <div className="face">
                <div className="bottom-face"></div>
            </div>
            <audio controls autoPlay loop>
                <source src="../assets/bgm/Background-Music.mp3" type="audio/ogg"></source>
            </audio>
        </div>
    )

}