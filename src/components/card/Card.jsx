import React from 'react'
import classNames from 'classnames'

import { CardSleeve } from '../card-sleeve/Card-Sleeve'
import "./Card.css"

const view = {
    front: false,
    back: true
}

const side = (back, category, description, year, image, selected) =>
    <div className={classNames('card', { back }, { selected })} style={{ backgroundImage: `url('${image}')` }}>
        <div className="category">
            <p>{category}</p>
        </div>
        {back &&
            <div className="year">
                <p>{year}</p>
            </div>}
        <div className="description">
            <p>{description}</p>
        </div>
    </div>

const card = ({ category, description, year, image, flipped, selected }) =>
    <div className={classNames('card-view', { flipped })}>
        {side(view.back, category, description, year, image, selected)}
        {side(view.front, category, description, year, image, selected)}
    </div>

export const Card = (props) =>
    <div className="card-container">
        {props.visible ? card(props) : <CardSleeve></CardSleeve>}
    </div>

