import React, { Component } from 'react'
import './Home.css'
import {CreateGame} from '../create-game/CreateGame.jsx'
import {JoinGame} from '../join-game/JoinGame.jsx'
import {AdminGame} from '../admin-game/AdminGame.jsx'

export class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: "Pablo"
        }
    }
    render = () =>
        <div className="container-home">

            <header className="header-home"><h1>Hola {this.state.nombre}</h1></header>

            <div className="sidebars-home">
                <div className="left-sidebar-home"><CreateGame goToSection={this.props.goToSection}></CreateGame></div>
                <div className="center-sidebar-home"><JoinGame></JoinGame></div>
                <div className="right-sidebar-home"><AdminGame goToSection={this.props.goToSection}></AdminGame></div>
            </div>
        </div>
}