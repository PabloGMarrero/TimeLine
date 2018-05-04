import { connect } from 'react-redux'

import { startNewGame } from '../actions/Game'
import { Game } from '../components/game/Game'

const mapStateToProps = ({ game }) => ({
    turn: game.turn,
    deck: game.deck,
    board: game.board,
    hands: game.hands,
})

const mapActionsToProps = dispatch => ({
    startNewGame: () => startNewGame(dispatch),
})

export default connect(mapStateToProps, mapActionsToProps)(Game)