import React from 'react'
import { storiesOf } from '@storybook/react'
import { Card } from '../components/card/Card'

import * as cardsModule from '../model/cards/cards'

storiesOf('Cards', module).add('Ludwig van Beethoven', () => <Card {...cardsModule.beethoven} visible={true}> </Card>)

storiesOf('Cards', module).add('Mona Lisa', () => <Card {...cardsModule.monaLisa} visible={true}> </Card>)

storiesOf('Cards', module).add('Statue of Liberty', () => <Card {...cardsModule.statueOfLiberty} visible={true}> </Card>)

storiesOf('Cards', module).add('Discovery of America', () => <Card {...cardsModule.discoveryOfAmerica} visible={true}> </Card>)

storiesOf('Cards', module).add('Telephone', () => <Card {...cardsModule.telephone} visible={true}> </Card>)

storiesOf('Cards', module).add('Abraham Lincoln', () => <Card {...cardsModule.abrahamLincoln} visible={true}> </Card>)

storiesOf('Cards', module).add('Adolf Hitler', () => <Card {...cardsModule.adolfHitler} visible={true}> </Card>)

storiesOf('Cards', module).add('Stephen Hawking', () => <Card {...cardsModule.stephenHawking} visible={true}> </Card>)

storiesOf('Cards', module).add('Jimi Hendrix', () => <Card {...cardsModule.jimiHendrix} visible={true}> </Card>)

storiesOf('Cards', module).add('Atari', () => <Card {...cardsModule.atari} visible={true}> </Card>)

storiesOf('Cards', module).add('Cellular Phone', () => <Card {...cardsModule.cellularPhone} visible={true}> </Card>)

storiesOf('Cards', module).add('Christ The Redeemer', () => <Card {...cardsModule.christTheRedeemer} visible={true}> </Card>)

storiesOf('Cards', module).add('Eiffel Tower', () => <Card {...cardsModule.eiffelTower} visible={true}> </Card>)

storiesOf('Cards', module).add('French Revolution', () => <Card {...cardsModule.frenchRevolution} visible={true}> </Card>)

storiesOf('Cards', module).add('Gramophone', () => <Card {...cardsModule.gramophone} visible={true}> </Card>)

storiesOf('Cards', module).add('Obelisk, Argentine', () => <Card {...cardsModule.obelisk} visible={true}> </Card>)

storiesOf('Cards', module).add('Commercial Radio', () => <Card {...cardsModule.radio} visible={true}> </Card>)

storiesOf('Cards', module).add('Taj Mahal', () => <Card {...cardsModule.tajMahal} visible={true}> </Card>)

storiesOf('Cards', module).add('The Exorcist', () => <Card {...cardsModule.theExorcist} visible={true}> </Card>)

storiesOf('Cards', module).add('The Scream', () => <Card {...cardsModule.theScream} visible={true}> </Card>)

storiesOf('Cards', module).add('the Three Stooges', () => <Card {...cardsModule.theThreeStooges} visible={true}> </Card>)

storiesOf('Cards', module).add('Twin Towers Attack', () => <Card {...cardsModule.twinTowersAttack} visible={true}> </Card>)

storiesOf('Cards', module).add('World War Two', () => <Card {...cardsModule.worldWarTwo} visible={true}> </Card>)

storiesOf('Cards', module).add('Zorro', () => <Card {...cardsModule.zorro} visible={true}> </Card>)

storiesOf('Cards', module).add('The sinking of the titanic', () => <Card {...cardsModule.titanic} visible={true}> </Card>)

storiesOf('Cards', module).add('Television', () => <Card {...cardsModule.television} visible={true}> </Card>)