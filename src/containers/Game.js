import { connect } from 'react-redux'

import { startGame, shuffleDeck, playInitialCardFromDeck, playerDrawCard, enemyDrawCard } from '../actions/Game'
import { Game } from '../components/game/Game'

const mapStateToProps = ({ game }) => ({
    turn: game.turn,
    deck: game.deck,
    board: game.board,
    hands: game.hands,
    selectedCard: game.selectedCard,
})

const mapActionsToProps = dispatch => ({
    startGame: () => dispatch(startGame()),
    shuffleDeck: () => dispatch(shuffleDeck()),
    playerDrawCard: () => dispatch(playerDrawCard()),
    enemyDrawCard: () => dispatch(enemyDrawCard()),
    playInitialCardFromDeck: () => dispatch(playInitialCardFromDeck()),
})


export default connect(mapStateToProps, mapActionsToProps)(Game)