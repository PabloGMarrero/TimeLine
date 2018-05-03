import { connect } from 'react-redux'

import { Hand } from '../components/hand/Hand'

const mapStateToProps = ({ game, hand }) => ({
    selectedCard: game.selectedCard,
    selectCardHandler: (hand.selectCardHandler),
    cancelSelectionHandler: hand.cancelSelectionHandler,
    showPlacesChoicesHandler: hand.showPlacesChoicesHandler
})

export default connect(mapStateToProps)(Hand)