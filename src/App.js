import React, { Component } from 'react';

import './App.css';
import {Welcome} from './components/views/welcome/Welcome'
import Game from './containers/Game';
import {goToSection} from './model/constants/constants'

class App extends Component {
  state = {
    seccion: Welcome
  }

  render() {
    const Componente = this.state.seccion
    
    return (
      // <Game/>
     <Componente goToSection={this.goToSection}/>
    );
  }

  goToSection = (section) =>{
    this.setState({
      seccion:goToSection(section)
    })
  }
}

export default App;
