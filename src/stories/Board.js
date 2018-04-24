import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as cardsModule from '../model/cards/cards'
import { Board } from '../components/board/Board';

const cardsOnDeck = cardsModule.cards()

storiesOf('Board', module).add('Board view', () => (<Board
    deck={cardsOnDeck}
    cardsOnPlay={[
        { card: cardsModule.abrahamLincoln, index: 0 },
        { card: cardsModule.atari, index: 1 },
        { card: cardsModule.christTheRedeemer, index: 2 },
        { card: cardsModule.frenchRevolution, index: 3 },
        { card: cardsModule.statueOfLiberty, index: 4 },
        { card: cardsModule.telephone, index: 5 },
    ]}
    isShowingCardChoices={false}
    placeCardHandler={(index) => console.log("handled")}></Board>))