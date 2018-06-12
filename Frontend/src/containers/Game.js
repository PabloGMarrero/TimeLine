import { connect } from 'react-redux'

import {
    startNewGame, playerPlayRandomCardFromHand, performWrongPlayEvent,
    moveToNextTurn, startEndTurnPhase
} from '../actions/Game'
import { Game } from '../components/game/Game'

const mapStateToProps = ({ game }) => ({
    turn: game.turn,
    phase: game.phase,
    cards: game.cards,
    hands: game.hands,
    board: game.board,
    deck: game.deck
})

const mapActionsToProps = dispatch => ({
    startNewGame: (deck) => startNewGame(deck, dispatch),
    simulateTurn: () => playerPlayRandomCardFromHand(dispatch),
    performWrongPlayEvent: () => performWrongPlayEvent(dispatch),
    moveToEndPhase: () => dispatch(startEndTurnPhase()),
    startNextTurn: () => moveToNextTurn(dispatch)
})

export default connect(mapStateToProps, mapActionsToProps)(Game)