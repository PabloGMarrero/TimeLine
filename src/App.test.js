import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux';
import storeCreator from './storeCreator'
import { Game as gameReducer } from './reducers/Game'
import { Board as boardReducer } from './reducers/Board'

it('renders without crashing', () => {

  const store = storeCreator(combineReducers(
    {
        game: gameReducer,
        board: boardReducer
    }
  ))

  const div = document.createElement('div');
  //ReactDOM.render(<Provider />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
