import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card } from '../components/card/Card'
import * as cardsModule from '../model/cards/cards'

const cardPreview = (card) => <Card {...card} visible={true}></Card>

storiesOf('Cards', module).add('Ludwig van Beethoven', () => cardPreview(cardsModule.beethoven))

storiesOf('Cards', module).add('Mona Lisa', () => cardPreview(cardsModule.monaLisa))

storiesOf('Cards', module).add('Statue of Liberty', () => cardPreview(cardsModule.statueOfLiberty))

storiesOf('Cards', module).add('Discovery of America', () => cardPreview(cardsModule.discoveryOfAmerica))

storiesOf('Cards', module).add('Telephone', () => cardPreview(cardsModule.telephone))

storiesOf('Cards', module).add('Abraham Lincoln', () => cardPreview(cardsModule.abrahamLincoln))

storiesOf('Cards', module).add('Adolf Hitler', () => cardPreview(cardsModule.adolfHitler))

storiesOf('Cards', module).add('Stephen Hawking', () => cardPreview(cardsModule.stephenHawking))

storiesOf('Cards', module).add('Jimi Hendrix', () => cardPreview(cardsModule.jimiHendrix))

storiesOf('Cards', module).add('Atari', () => cardPreview(cardsModule.atari))

storiesOf('Cards', module).add('Cellular Phone', () => cardPreview(cardsModule.cellularPhone))

storiesOf('Cards', module).add('Christ The Redeemer', () => cardPreview(cardsModule.christTheRedeemer))

storiesOf('Cards', module).add('Eiffel Tower', () => cardPreview(cardsModule.eiffelTower))

storiesOf('Cards', module).add('French Revolution', () => cardPreview(cardsModule.frenchRevolution))

storiesOf('Cards', module).add('Gramophone', () => cardPreview(cardsModule.gramophone))

storiesOf('Cards', module).add('Obelisk, Argentine', () => cardPreview(cardsModule.obelisk))

storiesOf('Cards', module).add('Commercial Radio', () => cardPreview(cardsModule.radio))

storiesOf('Cards', module).add('Taj Mahal', () => cardPreview(cardsModule.tajMahal))

storiesOf('Cards', module).add('The Exorcist', () => cardPreview(cardsModule.theExorcist))

storiesOf('Cards', module).add('The Scream', () => cardPreview(cardsModule.theScream))

storiesOf('Cards', module).add('the Three Stooges', () => cardPreview(cardsModule.theThreeStooges))

storiesOf('Cards', module).add('Twin Towers Attack', () => cardPreview(cardsModule.twinTowersAttack))

storiesOf('Cards', module).add('World War Two', () => cardPreview(cardsModule.worldWarTwo))

storiesOf('Cards', module).add('Zorro', () => cardPreview(cardsModule.zorro))

storiesOf('Cards', module).add('The sinking of the titanic', () => cardPreview(cardsModule.titanic))

storiesOf('Cards', module).add('Television', () => cardPreview(cardsModule.television))