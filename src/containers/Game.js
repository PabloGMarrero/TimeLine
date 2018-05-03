import { connect } from 'react-redux'

import { startGame, shuffleDeck, playInitialCardFromDeck, playerDrawCard, enemyDrawCard } from '../actions/Game'
import { Game } from '../components/game/Game'

const mapStateToProps = ({ turn, deck, board, playerHand, enemyHand, selectedCard }) => ({
    turn,
    deck,
    board,
    playerHand,
    enemyHand,
    selectedCard
})

const mapActionsToProps = dispatch => ({
    startGame: () => dispatch(startGame()),
    shuffleDeck: () => dispatch(shuffleDeck()),
    playerDrawCard: () => dispatch(playerDrawCard()),
    enemyDrawCard: () => dispatch(enemyDrawCard()),
    playInitialCardFromDeck: () => dispatch(playInitialCardFromDeck()),
})


export default connect(mapStateToProps, mapActionsToProps)(Game)