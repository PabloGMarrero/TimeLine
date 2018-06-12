import React, { Component } from 'react'
import './WaitingGame.css'
import {Secciones} from './../../../model/constants/constants'

export class WaitingGame extends Component {

    constructor(props){
        super(props)
    }
    render =()=> {
        return (
        <div className="main-container-waiting-game">
            <h2 className="text-waitin-game">Esperando partida...</h2>
            <p className="text-waitin-game">Buscando oponente en linea... </p>
        </div>
        
        
    )}

    componentDidMount() {
        setTimeout(() => {this.props.goToSection(Secciones.GAME)}, 5000)
      }
    
}