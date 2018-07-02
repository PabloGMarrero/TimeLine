import React, { Component } from 'react'
import './WaitingGame.css'
import { Secciones } from './../../../model/constants/constants'

export class WaitingGame extends Component {

    constructor(props) {
        super(props)
        this.state = {
            matchName: this.props.name,
            amountPlayers: this.props.players
        }
    }
    render = () => {
        return (
            <div className="main-container-waiting-game">
                <h2 className="text-waitin-game">Esperando partida con nombre {this.state.matchName}...</h2>
                <p className="text-waitin-game">Buscando oponente en linea 1 de {this.state.amountPlayers}... </p>
            </div>


        )
    }

    componentDidMount() {
        setTimeout(() => { this.props.goToSection(Secciones.GAME) }, 1000)
    }

}