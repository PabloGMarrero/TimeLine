import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as cardsModule from '../cards/cards'
import { Deck } from '../components/deck/Deck';

const cardsOnDeck = cardsModule.cards()

storiesOf('Deck', module).add('Draw a card from deck', () => (<Deck cards={cardsOnDeck}></Deck>))