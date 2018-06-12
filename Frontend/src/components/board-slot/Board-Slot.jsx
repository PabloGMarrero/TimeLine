import React, { Component } from 'react'
import classNames from 'classnames'

import './Board-Slot.css'
import { isEmpty, indexOf } from '../../model/slot/slot'
import { Card } from '../../components/card/Card'
import { get } from '../../model/board/board'
import { selectedCard } from '../../model/cards/cards'
import { Phase } from '../../model/constants/constants'

export class BoardSlot extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowingCardPreview: false
        }
        this.playCardHandler = this.playCardHandler.bind(this)
    }

    showCardPreview = () => this.setState({ isShowingCardPreview: true })

    hideCardPreview = () => this.setState({ isShowingCardPreview: false })

    renderEmptySlot = () => <div className="empty-slot"></div>

    renderEmptySlotIndicator = () => <div className="free-slot-indicator"></div>

    renderCard = () => <Card {...get(this.props.slot, this.props.cards)}></Card>

    renderCardPreview = () => <Card {...selectedCard(this.props.cards)}></Card>

    isEmptyWhenShowingChoices = () => this.props.isShowingCardChoices && isEmpty(this.props.slot)

    isEmptyWhenShowingPreview = () => this.state.isShowingCardPreview && isEmpty(this.props.slot)

    playCardHandler() {
        if (this.props.isShowingCardChoices && this.props.phase === Phase.MAIN_PHASE) {
            this.props.placeCardHandler(indexOf(this.props.slot))
        }
    }

    render = () =>
        <div>
            {this.isEmptyWhenShowingChoices() && this.renderEmptySlotIndicator()}
            <div className={classNames({ 'selectable-slot': this.props.isShowingCardChoices })}
                onClick={this.playCardHandler} onMouseOver={this.showCardPreview} onMouseOut={this.hideCardPreview}>
                <div>
                    {this.isEmptyWhenShowingPreview() && this.renderCardPreview()}
                    {this.isEmptyWhenShowingChoices() && this.renderEmptySlot()}
                    {!isEmpty(this.props.slot) && this.renderCard()}
                </div>
            </div>
        </div>

}