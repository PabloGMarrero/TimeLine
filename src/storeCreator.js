import { createStore, combineReducers } from 'redux'

import { Game as gameReducer } from './reducers/Game'
import { Hand as handReducer } from './reducers/Hand'
import { Board as boardReducer } from './reducers/Board'

export default function () {
    return createStore(
        combineReducers({
            game: gameReducer,
            hand: handReducer,
            board: boardReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}