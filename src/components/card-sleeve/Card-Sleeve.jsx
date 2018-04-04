import React, { Component } from 'react';

import './Card-Sleeve.css'

export class CardSleeve extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render = () => (
        <div className="sleeve-container">
            <div className='sleeve-view'>
                <div className="sleeve">
                    <img src="../assets/images/cards/timeline.png" className="logo" />
                </div>
            </div>
        </div>
    )

}