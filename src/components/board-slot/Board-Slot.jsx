import React, { Component } from 'react'
import classNames from 'classnames'

import './Board-Slot.css'
import { Card } from '../card/Card';

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
                onClick={() => this.props.placeCardHandler(this.props.cardSlot.index)} onMouseOver={this.showCardPreview}
                onMouseOut={this.hideCardPreview}>

                <div>
                    {this.state.isShowingCardPreview && !this.props.cardSlot.card && <div><Card {...this.props.selectedCard} visible={true}></Card></div>}
                    {this.props.isShowingCardChoices && <div className="empty-slot"></div>}
                    {this.props.cardSlot.card && <Card {...this.props.cardSlot.card} visible={true}></Card>}
                </div>
            </div>
        </div>

}
// export const BoardSlot = ({ cardSlot, isShowingCardChoices, placeCardHandler }) =>
//     <div>
//         {isShowingCardChoices && !cardSlot.card && <div className="free-slot-indicator"></div>}
//         <div className={classNames({ 'selectable-slot': isShowingCardChoices })}
//             onClick={() => placeCardHandler(cardSlot.index)} onMouseOver={()=>console.log("pum")}>
//             {isShowingCardChoices && <div className="empty-slot"></div>}
//             {cardSlot.card && <Card {...cardSlot.card} visible={true}></Card>}
//         </div>
//     </div>