import { createStore } from 'redux'

import { Game as reducer } from './reducers/Game'

export default function () {
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}