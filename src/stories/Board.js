import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as cardsModule from '../model/cards/cards'
import { Board } from '../components/board/Board';

const cardsOnDeck = cardsModule.cards()

storiesOf('Board', module).add('board', () => (<Board deck={cardsOnDeck}></Board>))