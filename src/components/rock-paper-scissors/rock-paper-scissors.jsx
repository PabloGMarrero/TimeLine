import React, { Component } from 'react';

import "./rock-paper-scissors.css"

export class RockPaperScissors extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.canBeFlipped) {
            this.setState({ flipped: !this.state.flipped });
        }
    }

    render = () => (
        <div className="rock-paper-scissors-container">
            <div className="selection">
                <div className="rock">
                    <div className="name">
                        <p>{"Rock"}</p>
                    </div>
                </div>
            </div>
            <div className="selection">
                <div className="paper">
                    <div className="name">
                        <p>{"Paper"}</p>
                    </div>
                </div>
            </div>
            <div className="selection">
                <div className="scissors">
                    <div className="name">
                        <p>{"Scissors"}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}