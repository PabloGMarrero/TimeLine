import React, { Component } from 'react'
import './JoinGame.css'

export class JoinGame extends Component {
    render =()=> 

        <div className="main-container-join-game">
            <h2>Unirse a partida</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>



            <p>Partidas</p>
            <select className="partidas-join-game">
                <option value="empty"></option>
            </select>
            <div className="button-div-join-game">
                <button type="button">Unirse</button>
            </div>
        </div>
    
}