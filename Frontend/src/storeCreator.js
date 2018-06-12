import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function (reducer) {
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk))
}