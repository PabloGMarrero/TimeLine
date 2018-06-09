import { connect } from 'react-redux'

import { startNewGame, playerPlayRandomCardFromHand } from '../actions/Game'
import { Game } from '../components/game/Game'

const mapStateToProps = ({ game }) => ({
    hands: game.hands,
    turn: game.turn,
    phase: game.phase
})

const mapActionsToProps = dispatch => ({
    startNewGame: () => startNewGame(dispatch),
    simulateTurn: () => playerPlayRandomCardFromHand(dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(Game)