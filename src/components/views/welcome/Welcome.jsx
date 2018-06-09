import React, { Component } from 'react'
import './Welcome.css'
import {Secciones} from './../../../model/constants/constants'
export class Welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: ""
        }
    }

    handleChange = (event) => this.setState({ nombre: event.target.value })  
    
    render(){
        return(
            <div className="main-container-welcome">
                <div className="center-container-welcome">
                    <h1>Quién sos?</h1>
                    <input type="text" placeholder="Nombre" id="nombre" name="nombre" onChange={this.handleChange} />
                    <div className="button-div-welcome">
                        <button type="submit" id="login" onClick={()=>this.props.goToSection(Secciones.HOME)} >Entrar</button>
                    </div>
                </div>
            </div>

            
        )
           
    
    }

}