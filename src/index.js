import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Game as gameReducer } from './reducers/Game'

import storeCreator from './storeCreator'

const store = storeCreator(combineReducers(
    {
        game: gameReducer
    }
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
