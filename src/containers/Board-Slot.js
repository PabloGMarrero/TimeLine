import { connect } from 'react-redux'

import { BoardSlot } from '../components/board-slot/Board-Slot'

const mapStateToProps = ({ game, }) => ({
    selectedCard: game.selectedCard,
    placeCardHandler: (() => { })
})

export default connect(mapStateToProps)(BoardSlot)