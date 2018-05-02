import React, { Component } from 'react'

import './Card-Sleeve.css'
import logo from '../../assets/images/cards/timeline.png'

export class CardSleeve extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render = () => (
        <div className="sleeve-container">
            <div className='sleeve-view'>
                <div className="sleeve">
                    <img src={logo} className="logo" alt="logo"/>
                </div>
            </div>
        </div>
    )

}