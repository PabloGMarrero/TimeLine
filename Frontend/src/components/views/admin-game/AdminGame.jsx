import React, { Component } from 'react'
import './AdminGame.css'
import {Secciones} from './../../../model/constants/constants'

export class AdminGame extends Component {
    render = () => 
        <div className="main-container-admin-game">
            <h2>Administrar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="button-admin-game">
                <button type="submit" id="createGame" onClick={() => this.props.goToSection(Secciones.ADMINCARDSLIST)}>Crear</button>
            </div>

        </div>
    
}