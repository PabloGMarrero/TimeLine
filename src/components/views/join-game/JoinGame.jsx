import React, { Component } from 'react'
import './JoinGame.css'

export class JoinGame extends Component {
    render =()=> 

        <div className="content">
            <h2>Unirse a partida</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>



            <p>Partidas</p>
            <select className="partidas">
                <option value="empty"></option>
            </select>
            <div className="button">
                <button type="button">Unirse</button>
            </div>
        </div>
    
}