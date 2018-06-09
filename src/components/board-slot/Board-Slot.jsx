import React, { Component } from 'react'
import classNames from 'classnames'

import './Board-Slot.css'
import Card from '../../containers/Card'
import { get } from '../../model/board/board'
import { selectedCard } from '../../model/cards/cards'
import { Phase } from '../../model/constants/constants'

export class BoardSlot extends Component {
    state = {
        isShowingCardPreview: false
    }

    showCardPreview = () => this.setState({ isShowingCardPreview: true })

    hideCardPreview = () => this.setState({ isShowingCardPreview: false })

    render = () =>
        <div>
            {this.props.isShowingCardChoices && !this.props.cardSlot.card && <div className="free-slot-indicator"></div>}
            <div className={classNames({ 'selectable-slot': this.props.isShowingCardChoices })}
                onClick={() => this.props.isShowingCardChoices &&
                    this.props.phase === Phase.MAIN_PHASE ? this.props.placeCardHandler(this.props.cardSlot.index)
                    : {}} onMouseOver={this.showCardPreview} onMouseOut={this.hideCardPreview}>
                <div>
                    {this.state.isShowingCardPreview && !this.props.cardSlot.card && <div><Card {...selectedCard(this.props.cards)}></Card></div>}
                    {this.props.isShowingCardChoices && <div className="empty-slot"></div>}
                    {this.props.cardSlot.card && <Card {...get(this.props.cardSlot, this.props.cards)}></Card>}
                </div>
            </div>
        </div>

}