import { connect } from 'react-redux'

import { Hand } from '../components/hand/Hand'
import { selectACard, deselectCard, showCardChoices } from '../actions/Game'

const mapStateToProps = ({ game }) => ({
    turn: game.turn,
    phase: game.phase,
    cards: game.cards
})

const mapActionsToProps = dispatch => ({
    selectCardHandler: card => dispatch(selectACard(card)),
    cancelSelectionHandler: () => dispatch(deselectCard()),
    showPlacesChoicesHandler: () => dispatch(showCardChoices())
})

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Hand)
