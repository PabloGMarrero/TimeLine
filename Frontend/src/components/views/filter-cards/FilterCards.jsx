import React from 'react'
import './FilterCards.css'

export const FilterCards = () => 
        <div className="main-container-card-list">
            <h2>Filtro de cartas</h2>
            <p>Texto para matchear</p>
            <input type="text" id="textMatch" name="textMatch" onChange/>
        </div>
