import { connect } from 'react-redux'

import { Hand } from '../components/hand/Hand'
import {selectACard, deselectCardsInHand} from '../actions/Game'

const mapActionsToProps = dispatch => ({
    selectCardHandler: (card, hand) => dispatch(selectACard(card, hand)),
    cancelSelectionHandler: (hand) => dispatch(deselectCardsInHand(hand)),
})

export default connect(null, mapActionsToProps)(Hand)