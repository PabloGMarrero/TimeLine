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


const cardOnHand = (card, hand, { playerHandClass, enemyHandClass, selectedClass }, selectedCard, selectCardHandler) => (
    card &&
    <figure className={classNames('card-in-hand', `${hand.owner ? playerHandClass : enemyHandClass}`,
        `${card.selected && selectedClass}`)} onClick={() => selectCardHandler(card,hand)}>
        <div className={classNames({ 'pickable': card !== selectedCard && hand.owner })}>
            <Card {...card}></Card>
        </div>
    </figure>
)

export const Hand = ({ hand, selectedCard, selectCardHandler, cancelSelectionHandler, showPlacesChoicesHandler }) =>
    <div className="hand-container">
        <section className="hand">
            {cardOnHand(handModule.get(hand, 0), hand, handProps().firstCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 1), hand, handProps().secondCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 2), hand, handProps().thirdCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 3), hand, handProps().fourthCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(handModule.get(hand, 4), hand, handProps().fifthCardProps, selectedCard, selectCardHandler)}
        </section>
        {selectedCard &&
            <section className="card-options">
                <figure className="play-card-option" onClick={showPlacesChoicesHandler}></figure>
                <figure className="cancel-option" onClick={() => cancelSelectionHandler(selectedCard)}></figure>
            </section>}
    </div>


