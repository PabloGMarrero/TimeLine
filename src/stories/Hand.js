import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hand } from '../components/hand/Hand'

import * as cardsModule from '../model/cards/cards'

const playerHandExample = [
    { ...cardsModule.beethoven, visible: true, owner: true },
    { ...cardsModule.monaLisa, visible: true, owner: true },
    { ...cardsModule.statueOfLiberty, visible: true, owner: true },
    { ...cardsModule.discoveryOfAmerica, visible: true, owner: true },
    { ...cardsModule.telephone, visible: true, owner: true },
]

const enemyHandExample = [
    { ...cardsModule.eiffelTower, visible: true },
    { ...cardsModule.twinTowersAttack, visible: true },
    { ...cardsModule.worldWarTwo, visible: true },
    { ...cardsModule.frenchRevolution, visible: true },
    { ...cardsModule.titanic, visible: true },
]

storiesOf('Hand', module).add('Complete Player hand', () => (<Hand
    firstCard={playerHandExample[0]} secondCard={playerHandExample[1]} thirdCard={playerHandExample[2]}
    fourthCard={playerHandExample[3]} fifthCard={playerHandExample[4]}></Hand>))

storiesOf('Hand', module).add('Complete Enemy hand', () => (<Hand
    firstCard={enemyHandExample[0]} secondCard={enemyHandExample[1]} thirdCard={enemyHandExample[2]}
    fourthCard={enemyHandExample[3]} fifthCard={enemyHandExample[4]}></Hand>))