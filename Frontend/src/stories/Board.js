import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import storeCreator from '../storeCreator'
import { Game as reducer } from '../reducers/Game'
import Board from '../containers/Board'

const store = storeCreator(
    combineReducers({
        game: reducer
    })
)

storiesOf('Board', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Regular view', () => <Board />)
