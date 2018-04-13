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


const cardOnHand = (card, { playerHandClass, enemyHandClass, selectedClass }, selectedCard, selectCardHandler) => (
    card &&
    <figure className={classNames('card-in-hand', `${{ ...card }.owner ? playerHandClass : enemyHandClass}`,
        `${card === selectedCard && selectedClass}`)} onClick={() => selectCardHandler(card)}>
        <div className={classNames({ 'pickable': card !== selectedCard && { ...card }.owner })}>
            <Card {...card}></Card>
        </div>
    </figure>
)

export const Hand = ({ firstCard, secondCard, thirdCard, fourthCard, fifthCard, selectedCard, selectCardHandler, cancelSelectionHandler }) =>
    <div className="hand-container">
        <section className="hand">
            {cardOnHand(firstCard, handProps().firstCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(secondCard, handProps().secondCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(thirdCard, handProps().thirdCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(fourthCard, handProps().fourthCardProps, selectedCard, selectCardHandler)}
            {cardOnHand(fifthCard, handProps().fifthCardProps, selectedCard, selectCardHandler)}
        </section>
        {selectedCard &&
            <section className="card-options">
                <figure className="play-card-option"></figure>
                <figure className="look-card-option"></figure>
                <figure className="cancel-option" onClick={() => cancelSelectionHandler(selectedCard)}></figure>
            </section>}
    </div>


