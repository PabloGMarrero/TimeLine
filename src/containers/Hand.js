import { connect } from 'react-redux'

import { Hand } from '../components/hand/Hand'
import {selectACard} from '../actions/Game'

// const mapStateToProps = ({ game, hand }) => ({
//     selectedCard: game.selectedCard,
//     cancelSelectionHandler: (()=>console.log("Cancelando carta seleccionada")),//hand.cancelSelectionHandler,
//     showPlacesChoicesHandler: (()=>console.log("Muestra los lugadores posibles"))// hand.showPlacesChoicesHandler
// })

const mapActionsToProps = dispatch => ({
    selectCardHandler: (card, hand) => dispatch(selectACard(card, hand))
})

export default connect(null, mapActionsToProps)(Hand)