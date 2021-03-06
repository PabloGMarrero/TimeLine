import React, { Component } from 'react'
import './CreateGame.css'
import {Secciones} from './../../../model/constants/constants'

export class CreateGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: 2,
            name: undefined
        }
    }

    render = ()=> {
        return (
            <div className="main-container-create-game">
                <div className="content-create-game">
                    
                    <h2>Crear partida</h2>
                    <p>Nombre</p>
                    <input type="text" id="game" name="game" onChange={this.handleNameGame} />

                    <p># jugadores</p>
                    <input type="text" id="jugadores" name="jugadores" onChange={this.handlePlayers} />

                    <p>Set de cartas</p>
                    <select className="set-cartas-create-game">
                        <option value="empty"></option>
                        <option value="basico">Básico</option>
                    </select>

                    <div className="button-create-game">
                        <button type="submit" id="createGame" onClick={() => this.props.goToSection(Secciones.WAITINGGAME, { players: this.state.players, name: this.state.name})}>Crear</button>
                    </div>
                    </div>
            </div>
        )
    }


    handleNameGame = (event) => this.setState({ name: event.target.value })
    handlePlayers = (event) => this.setState({ players: event.target.value })
}
