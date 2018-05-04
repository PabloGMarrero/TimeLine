import React from 'react'

import './Card-Sleeve.css'
import logo from '../../assets/images/cards/timeline.png'

export const CardSleeve = () =>
    <div className="sleeve-container">
        <div className='sleeve-view'>
            <div className="sleeve">
                <img src={logo} className="logo" alt="logo" />
            </div>
        </div>
    </div>
