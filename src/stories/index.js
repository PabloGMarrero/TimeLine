import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card } from '../components/card/Card';
import { Hand } from '../components/hand/Hand';
import { Deck } from '../components/deck/Deck';
import { CardSleeve } from '../components/card-sleeve/Card-Sleeve';
import { Board } from '../components/board/Board';

const beethoven =
    <Card
        category={'♫'}
        description={'Ludwig van Beethoven'}
        image={'../assets/images/cards/beethoven.jpg'}
        year={1770}
        canBeFlipped={true}
        flipped={false}
        onDeck={false}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>

const monaLisa =
    <Card
        category={'A'}
        description={'Mona Lisa'}
        image={'../assets/images/cards/mona-lisa.jpg'}
        year={1503}
        canBeFlipped={true}
        flipped={false}
        onDeck={false}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>

const statueOfLiberty =
    <Card
        category={'M'}
        description={'Statue of Liberty'}
        image={'../assets/images/cards/The-Statue-Of-Liberty.jpg'}
        year={1886}
        canBeFlipped={true}
        flipped={false}
        onDeck={false}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>

const discoveryOfAmerica =
    <Card
        category={'H'}
        description={'Discovery of America'}
        image={'../assets/images/cards/columbus-discovers-america.jpg'}
        year={1492}
        canBeFlipped={true}
        flipped={false}
        onDeck={false}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>

const telephone =
    <Card
        category={'I'}
        description={'Telephone'}
        image={'../assets/images/cards/Telephone-invention.JPG'}
        year={1876}
        canBeFlipped={true}
        flipped={false}
        onDeck={false}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>

const cardsOnHand = [
    <Card
        category={'♫'}
        description={'Ludwig van Beethoven'}
        image={'../assets/images/cards/beethoven.jpg'}
        year={1770}
        canBeFlipped={false}
        flipped={false}
        onDeck={false}
        onHand={true}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'A'}
        description={'Mona Lisa'}
        image={'../assets/images/cards/mona-lisa.jpg'}
        year={1503}
        canBeFlipped={false}
        flipped={false}
        onDeck={false}
        onHand={true}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'M'}
        description={'Statue of Liberty'}
        image={'../assets/images/cards/The-Statue-Of-Liberty.jpg'}
        year={1886}
        canBeFlipped={false}
        flipped={false}
        onDeck={false}
        onHand={true}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'H'}
        description={'Discovery of America'}
        image={'../assets/images/cards/columbus-discovers-america.jpg'}
        year={1492}
        canBeFlipped={false}
        flipped={false}
        onDeck={false}
        onHand={true}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'I'}
        description={'Telephone'}
        image={'../assets/images/cards/Telephone-invention.JPG'}
        year={1876}
        canBeFlipped={false}
        flipped={false}
        onDeck={false}
        onHand={true}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
]

const cardsOnDeck = [
    <Card
        category={'♫'}
        description={'Ludwig van Beethoven'}
        image={'../assets/images/cards/beethoven.jpg'}
        year={1770}
        canBeFlipped={false}
        flipped={false}
        onDeck={true}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'A'}
        description={'Mona Lisa'}
        image={'../assets/images/cards/mona-lisa.jpg'}
        year={1503}
        canBeFlipped={false}
        flipped={false}
        onDeck={true}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'M'}
        description={'Statue of Liberty'}
        image={'../assets/images/cards/The-Statue-Of-Liberty.jpg'}
        year={1886}
        canBeFlipped={false}
        flipped={false}
        onDeck={true}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'H'}
        description={'Discovery of America'}
        image={'../assets/images/cards/columbus-discovers-america.jpg'}
        year={1492}
        canBeFlipped={false}
        flipped={false}
        onDeck={true}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
    <Card
        category={'I'}
        description={'Telephone'}
        image={'../assets/images/cards/Telephone-invention.JPG'}
        year={1876}
        canBeFlipped={false}
        flipped={false}
        onDeck={true}
        onHand={false}
        onBoard={false}
        onEnemyPossession={false}>
    </Card>,
]


storiesOf('Card', module).add('Music category', () => beethoven);

storiesOf('Card', module).add('Art & Literature category', () => monaLisa);

storiesOf('Card', module).add('Monuments category', () => statueOfLiberty);

storiesOf('Card', module).add('Historical event category', () => discoveryOfAmerica);

storiesOf('Card', module).add('Invention event category', () => telephone);

storiesOf('Card Sleeve', module).add('Sleeve', () => (<CardSleeve></CardSleeve>));

storiesOf('Hand', module).add('Five cards in hand', () => (<Hand cards={cardsOnHand}></Hand>));

storiesOf('Deck', module).add('Draw a card from deck', () => (<Deck cards={cardsOnDeck}></Deck>));

storiesOf('Board', module).add('Game board', () => (<Board hand={cardsOnHand} deck={cardsOnDeck}></Board>));
