import React from 'react'
import classNames from 'classnames'

import "./Hand.css"
import { Card } from '../card/Card';
import * as handModule from '../../model/hands/hands'


const cardProps = (playerHandClass, enemyHandClass, selectedClass) => (
    {
        playerHandClass,
        enemyHandClass,
        selectedClass
    }
)

const handProps = () => ({
    firstCardProps: cardProps('first', 'enemy-first', 'first-picking'),
    secondCardProps: cardProps('second', 'enemy-second', 'second-picking'),
    thirdCardProps: cardProps('third', 'enemy-third', 'third-picking'),
    fourthCardProps: cardProps('fourth', 'enemy-fourth', 'fourth-picking'),
    fifthCardProps: cardProps('fifth', 'enemy-fifth', 'fifth-picking'),
})


const cardOnHand = (card, hand, { playerHandClass, enemyHandClass, selectedClass }, selectCardHandler) => (
    card &&
    <figure className={classNames('card-in-hand', `${hand.owner ? playerHandClass : enemyHandClass}`,
        `${card.selected && selectedClass}`)} onClick={() => selectCardHandler(card,hand)}>
        <div className={classNames({ 'pickable': !card.selected && hand.owner })}>
            <Card {...card}></Card>
        </div>
    </figure>
)

export const Hand = ({ hand, selectCardHandler, cancelSelectionHandler, showPlacesChoicesHandler }) =>
    <div className="hand-container">
        <section className="hand">
            {cardOnHand(handModule.get(hand, 0), hand, handProps().firstCardProps, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 1), hand, handProps().secondCardProps, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 2), hand, handProps().thirdCardProps, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 3), hand, handProps().fourthCardProps, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 4), hand, handProps().fifthCardProps, selectCardHandler)}
        </section>
        {handModule.isAnyCardSelected(hand) &&
            <section className="card-options">
                <figure className="play-card-option" onClick={showPlacesChoicesHandler}></figure>
                <figure className="cancel-option" onClick={() => cancelSelectionHandler(hand)}></figure>
            </section>}
    </div>


