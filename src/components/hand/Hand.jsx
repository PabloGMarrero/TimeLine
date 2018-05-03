import React from 'react'
import classNames from 'classnames'

import "./Hand.css"
import { Card } from '../card/Card';


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


const cardOnHand = (card, owner, { playerHandClass, enemyHandClass, selectedClass }, selectedCard, selectCardHandler) => (
    card &&
    <figure className={classNames('card-in-hand', `${owner ? playerHandClass : enemyHandClass}`,
        `${card === selectedCard && selectedClass}`)} onClick={() => selectCardHandler(card)}>
        <div className={classNames({ 'pickable': card !== selectedCard && owner })}>
            <Card {...card}></Card>
        </div>
    </figure>
)

export const Hand = ({ firstCard, secondCard, thirdCard, fourthCard, fifthCard, owner,
    selectedCard, selectCardHandler, cancelSelectionHandler, showPlacesChoicesHandler }) =>
    <div className="hand-container">
        <section className="hand">
            {cardOnHand(firstCard, owner, handProps().firstCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(secondCard, owner, handProps().secondCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(thirdCard, owner, handProps().thirdCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(fourthCard, owner, handProps().fourthCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(fifthCard, owner, handProps().fifthCardProps, selectedCard, selectCardHandler)}
        </section>
        {selectedCard &&
            <section className="card-options">
                <figure className="play-card-option" onClick={showPlacesChoicesHandler}></figure>
                <figure className="cancel-option" onClick={() => cancelSelectionHandler(selectedCard)}></figure>
            </section>}
    </div>


