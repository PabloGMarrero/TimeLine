import React, { Component } from 'react'

import './App.css'
import { Welcome } from './components/views/welcome/Welcome'
import { returnComponentForSection } from './model/constants/constants'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            seccion: Welcome
        }
    }

    render() {
        //const Componente = this.state.seccion
        const { seccion: Componente, optionalProp = {} } = this.state

        return <Componente goToSection={this.goToSection} {...optionalProp} />
    }

    goToSection = (section, optionalProp) => {
        this.setState({
            seccion: returnComponentForSection(section),
            optionalProp
        })
    }
}

export default App