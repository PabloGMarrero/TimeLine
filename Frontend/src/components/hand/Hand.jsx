import React from 'react'
import classNames from 'classnames'

import './Hand.css'
import { Card } from '../../components/card/Card'
import { get } from '../../model/hand/hand'
import { Phase, Turn } from '../../model/constants/constants'


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


const cardOnHand = (card, hand, turn, phase, { playerHandClass, enemyHandClass, selectedClass }, selectCardHandler) => (
    card &&
    <figure className={classNames('card-in-hand', `${hand.owner === Turn.PLAYER ? playerHandClass : enemyHandClass}`,
        `${card.selected && turn === Turn.PLAYER && selectedClass}`)}
    onClick={() => (hand.owner === turn && phase === Phase.MAIN_PHASE ? selectCardHandler(card) : {})}>
        <div className={classNames({ 'pickable': !card.selected && hand.owner === Turn.PLAYER })}>
            <Card {...card}></Card>
        </div>
    </figure>
)

export const Hand = ({ hand, cards, turn, phase, selectCardHandler, cancelSelectionHandler, showPlacesChoicesHandler }) =>
    <div className="hand-container">
        <section className="hand">
            {cardOnHand(get(0, hand, cards), hand, turn, phase, handProps().firstCardProps, selectCardHandler)}
            {cardOnHand(get(1, hand, cards), hand, turn, phase, handProps().secondCardProps, selectCardHandler)}
            {cardOnHand(get(2, hand, cards), hand, turn, phase, handProps().thirdCardProps, selectCardHandler)}
            {cardOnHand(get(3, hand, cards), hand, turn, phase, handProps().fourthCardProps, selectCardHandler)}
            {cardOnHand(get(4, hand, cards), hand, turn, phase, handProps().fifthCardProps, selectCardHandler)}
        </section>
        {cards.some(_ => _.selected) &&
            <section className="card-options">
                <figure className="play-card-option" onClick={showPlacesChoicesHandler}></figure>
                <figure className="cancel-option" onClick={() => cancelSelectionHandler()}></figure>
            </section>}
    </div>


