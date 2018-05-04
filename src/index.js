import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Game as gameReducer } from './reducers/Game'
import { Hand as handReducer } from './reducers/Hand'
import { Board as boardReducer } from './reducers/Board'

import storeCreator from './storeCreator'

const store = storeCreator(combineReducers(
    {
        game: gameReducer,
        hand: handReducer,
        board: boardReducer
    }
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
