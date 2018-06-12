import React, { Component } from 'react'
import './AdminCardList.css'
import {Secciones} from './../../../model/constants/constants'

const cardslist = {
        
}

export class AdminCardList extends Component { 

    constructor(props) {
        super(props)
        this.state = {
            cards: cardslist
        }
    }

    render=()=>{
        return(
            <div className="main-container-card-list">

                <h2>Panel de administración</h2>
                <div className="content-admin-card-list">
                    <div className="cardslist-sidebar">
                        <p>acá hay un montón de cartas re piolas</p>
                    </div>

                    <div className="panel-admin-sidebar">
                        
                        <div className="create-card-panel">
                            <p>Sección donde podrás crear tus propias cartas!</p>
                            <div className="button-admin-game">
                                <button type="submit" id="createGame">Crear carta</button>
                            </div>
                        </div>

                        <div className="filter-cards-panel">
                            <p>Sección filtros para realizar la búsqueda de la carta que desees rápidamente.</p>
                        </div>

                        <div className="return-home">
                            <p>Volvé a la pantalla principal para jugar sin parar!</p>
                            <div className="button-admin-game">
                                <button type="submit" id="createGame" onClick={() => this.props.goToSection(Secciones.HOME)}>Pantalla principal</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}