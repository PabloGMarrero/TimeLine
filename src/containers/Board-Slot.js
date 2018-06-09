import { connect } from 'react-redux'

import { BoardSlot } from '../components/board-slot/Board-Slot'
import { playerPlayCardFromHand } from '../actions/Game'

const mapStateToProps = ({ game }) => ({
    turn: game.turn,
    phase: game.phase,
    cards: game.cards,
    board: game.board,
    isShowingCardChoices: game.showingCardChoices
})

const mapActionsToProps = dispatch => ({
    placeCardHandler: (BoardIndex) => playerPlayCardFromHand(BoardIndex, dispatch),
})

export default connect(mapStateToProps, mapActionsToProps)(BoardSlot)