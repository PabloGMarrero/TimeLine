import { connect } from 'react-redux'

import { BoardSlot } from '../components/board-slot/Board-Slot'
import {playCardFromPlayerhand} from '../actions/Game'

const mapActionsToProps = dispatch => ({
    placeCardHandler: (slot) => dispatch(playCardFromPlayerhand(slot)),
})

export default connect(null, mapActionsToProps)(BoardSlot)