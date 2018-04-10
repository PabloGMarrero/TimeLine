import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Card } from '../components/card/Card'
import { Hand } from '../components/hand/Hand'
import { Deck } from '../components/deck/Deck'
import { CardSleeve } from '../components/card-sleeve/Card-Sleeve'
import { Board } from '../components/board/Board'
import { RockPaperScissors } from '../components/rock-paper-scissors/rock-paper-scissors'
import { Game } from '../components/game/Game'

const beethoven =
    <Card
        category={'P'}
        description={'Ludwig van Beethoven'}
        image={'../assets/images/cards/beethoven.jpg'}
        year={1770}
        flipped={false}
        selected={false}>
    </Card>

const monaLisa =
    <Card
        category={'A'}
        description={'Mona Lisa'}
        image={'../assets/images/cards/mona-lisa.jpg'}
        year={1503}
        flipped={false}
        selected={false}>
    </Card>

const statueOfLiberty =
    <Card
        category={'M'}
        description={'Statue of Liberty'}
        image={'../assets/images/cards/The-Statue-Of-Liberty.jpg'}
        year={1886}
        flipped={false}
        selected={false}>
    </Card>

const discoveryOfAmerica =
    <Card
        category={'H'}
        description={'Discovery of America'}
        image={'../assets/images/cards/columbus-discovers-america.jpg'}
        year={1492}
        flipped={false}
        selected={false}>
    </Card>

const telephone =
    <Card
        category={'I'}
        description={'Telephone'}
        image={'../assets/images/cards/telephone.jpg'}
        year={1876}
        flipped={false}
        selected={false}>
    </Card>

const abrahamLincoln =
    <Card
        category={'P'}
        description={'Abraham Lincoln'}
        image={'../assets/images/cards/abraham-lincoln.jpg'}
        year={1809}
        flipped={false}
        selected={false}>
    </Card>


const adolfHitler =
    <Card
        category={'P'}
        description={'Adolf Hitler'}
        image={'../assets/images/cards/adolf-hitler.jpg'}
        year={1889}
        flipped={false}
        selected={false}>
    </Card>

const stephenHawking =
    <Card
        category={'P'}
        description={'Stephen Hawking'}
        image={'../assets/images/cards/stephen-hawking-simon-kregar.jpg'}
        year={1942}
        flipped={false}
        selected={false}>
    </Card>

const jimiHendrix =
    <Card
        category={'P'}
        description={'Jimi Hendrix'}
        image={'../assets/images/cards/jimi-hendrix.jpg'}
        year={1970}
        flipped={false}
        selected={false}>
    </Card>

const atari =
    <Card
        category={'I'}
        description={'Atari'}
        image={'../assets/images/cards/atari.jpg'}
        year={1972}
        flipped={false}
        selected={false}>
    </Card>

const cellularPhone =
    <Card
        category={'I'}
        description={'Cellular Phone'}
        image={'../assets/images/cards/cellular_phone.jpg'}
        year={1973}
        flipped={false}
        selected={false}>
    </Card>

const christTheRedeemer =
    <Card
        category={'M'}
        description={'Christ The Redeemer'}
        image={'../assets/images/cards/christ-the-redeemer.jpg'}
        year={1931}
        flipped={false}
        selected={false}>
    </Card>

const eiffelTower =
    <Card
        category={'M'}
        description={'Eiffel Tower'}
        image={'../assets/images/cards/eiffel-tower.jpg'}
        year={1889}
        flipped={false}
        selected={false}>
    </Card>

const frenchRevolution =
    <Card
        category={'H'}
        description={'French Revolution'}
        image={'../assets/images/cards/french-revolution.jpg'}
        year={1789}
        flipped={false}
        selected={false}>
    </Card>

const gramophone =
    <Card
        category={'I'}
        description={'Gramophone'}
        image={'../assets/images/cards/gramophone.jpg'}
        year={1887}
        flipped={false}
        selected={false}>
    </Card>

const obelisk =
    <Card
        category={'M'}
        description={'Obelisk, Argentine'}
        image={'../assets/images/cards/obelisco.jpg'}
        year={1936}
        flipped={false}
        selected={false}>
    </Card>

const radio =
    <Card
        category={'I'}
        description={'Commercial Radio'}
        image={'../assets/images/cards/radio.jpg'}
        year={1897}
        flipped={false}
        selected={false}>
    </Card>

const tajMahal =
    <Card
        category={'M'}
        description={'Taj Mahal'}
        image={'../assets/images/cards/taj-mahal.jpg'}
        year={1653}
        flipped={false}
        selected={false}>
    </Card>

const theExorcist =
    <Card
        category={'A'}
        description={'The Exorcist'}
        image={'../assets/images/cards/the_exorcist.jpg'}
        year={1973}
        flipped={false}
        selected={false}>
    </Card>

const theScream =
    <Card
        category={'A'}
        description={'The Scream'}
        image={'../assets/images/cards/the-scream.jpg'}
        year={1893}
        flipped={false}
        selected={false}>
    </Card>

const theThreeStooges =
    <Card
        category={'A'}
        description={'The Three Stooges'}
        image={'../assets/images/cards/the-three_stooges.jpg'}
        year={1922}
        flipped={false}
        selected={false}>
    </Card>

const twinTowersAttack =
    <Card
        category={'H'}
        description={'Twin Towers Attack'}
        image={'../assets/images/cards/twin-towers-attack.jpg'}
        year={2001}
        flipped={false}
        selected={false}>
    </Card>

const worldWarTwo =
    <Card
        category={'H'}
        description={'World War 2'}
        image={'../assets/images/cards/world-war-II.jpg'}
        year={1939}
        flipped={false}
        selected={false}>
    </Card>

const zorro =
    <Card
        category={'A'}
        description={'Zorro'}
        image={'../assets/images/cards/zorro.jpg'}
        year={1957}
        flipped={false}
        selected={false}>
    </Card>

const titanic =
    <Card
        category={'H'}
        description={'The sinking of the titanic'}
        image={'../assets/images/cards/titanic.jpg'}
        year={1912}
        flipped={false}
        selected={false}>
    </Card>

const television =
    <Card
        category={'I'}
        description={'Television'}
        image={'../assets/images/cards/tv.jpg'}
        year={1926}
        flipped={false}
        selected={false}>
    </Card>

const cardsOnDeck = [
    beethoven,
    monaLisa,
    statueOfLiberty,
    discoveryOfAmerica,
    telephone,
    abrahamLincoln,
    adolfHitler,
    stephenHawking,
    jimiHendrix,
    atari,
    cellularPhone,
    christTheRedeemer,
    eiffelTower,
    frenchRevolution,
    gramophone,
    obelisk,
    radio,
    tajMahal,
    theExorcist,
    theScream,
    theThreeStooges,
    twinTowersAttack,
    worldWarTwo,
    zorro,
    titanic,
    television,
]

const playerHandExample = [
    beethoven,
    monaLisa,
    statueOfLiberty,
    discoveryOfAmerica,
    telephone,
]

const enemyHandExample = [
    theThreeStooges,
    twinTowersAttack,
    worldWarTwo,
    zorro,
    titanic,
]

storiesOf('Cards', module).add('Ludwig van Beethoven', () => beethoven)

storiesOf('Cards', module).add('Mona Lisa', () => monaLisa)

storiesOf('Cards', module).add('Statue of Liberty', () => statueOfLiberty)

storiesOf('Cards', module).add('Discovery of America', () => discoveryOfAmerica)

storiesOf('Cards', module).add('Telephone', () => telephone)

storiesOf('Cards', module).add('Abraham Lincoln', () => abrahamLincoln)

storiesOf('Cards', module).add('Adolf Hitler', () => adolfHitler)

storiesOf('Cards', module).add('Stephen Hawking', () => stephenHawking)

storiesOf('Cards', module).add('Jimi Hendrix', () => jimiHendrix)

storiesOf('Cards', module).add('Atari', () => atari)

storiesOf('Cards', module).add('Cellular Phone', () => cellularPhone)

storiesOf('Cards', module).add('Christ The Redeemer', () => christTheRedeemer)

storiesOf('Cards', module).add('Eiffel Tower', () => eiffelTower)

storiesOf('Cards', module).add('French Revolution', () => frenchRevolution)

storiesOf('Cards', module).add('Gramophone', () => gramophone)

storiesOf('Cards', module).add('Obelisk, Argentine', () => obelisk)

storiesOf('Cards', module).add('Commercial Radio', () => radio)

storiesOf('Cards', module).add('Taj Mahal', () => tajMahal)

storiesOf('Cards', module).add('The Exorcist', () => theExorcist)

storiesOf('Cards', module).add('The Scream', () => theScream)

storiesOf('Cards', module).add('the Three Stooges', () => theThreeStooges)

storiesOf('Cards', module).add('Twin Towers Attack', () => twinTowersAttack)

storiesOf('Cards', module).add('World War Two', () => worldWarTwo)

storiesOf('Cards', module).add('Zorro', () => zorro)

storiesOf('Cards', module).add('The sinking of the titanic', () => titanic)

storiesOf('Cards', module).add('Television', () => television)

storiesOf('Card Sleeve', module).add('Sleeve', () => (<CardSleeve></CardSleeve>))

storiesOf('Hand', module).add('Complete Player hand', () => (<Hand cards={playerHandExample} owner={true}></Hand>))

storiesOf('Hand', module).add('Complete Enemy hand', () => (<Hand cards={enemyHandExample} owner={false}></Hand>))

storiesOf('Deck', module).add('Draw a card from deck', () => (<Deck cards={cardsOnDeck}></Deck>))

storiesOf('Rock-Paper-Scissors', module).add('Rock-paper-scissors selection', () => <RockPaperScissors> </RockPaperScissors>)

storiesOf('Board', module).add('board', () => (<Board deck={cardsOnDeck}></Board>))

storiesOf('Game', module).add('game board', () => <Game playerHand={playerHandExample} enemyHand={enemyHandExample} deck={cardsOnDeck}></Game>)
