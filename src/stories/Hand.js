import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import * as cardsModule from '../model/cards/cards'
import { Hand } from '../components/hand/Hand';

const playerHandExample = [
    { ...cardsModule.beethoven, visible: true },
    { ...cardsModule.monaLisa, visible: true },
    { ...cardsModule.statueOfLiberty, visible: true },
    { ...cardsModule.discoveryOfAmerica, visible: true },
    { ...cardsModule.telephone, visible: true },
]

const enemyHandExample = [
    { ...cardsModule.eiffelTower, visible: true },
    { ...cardsModule.twinTowersAttack, visible: true },
    { ...cardsModule.worldWarTwo, visible: true },
    { ...cardsModule.frenchRevolution, visible: true },
    { ...cardsModule.titanic, visible: true },
]

storiesOf('Hand', module).add('Complete Player hand', () => (<Hand cards={playerHandExample} owner={true}></Hand>))

storiesOf('Hand', module).add('Complete Enemy hand', () => (<Hand cards={enemyHandExample} owner={false}></Hand>))