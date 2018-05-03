import { connect } from 'react-redux'

import { Board } from '../components/board/Board'

const mapStateToProps = ({ game, hand, board }) => ({
    selectedCard: game.selectedCard,
    deck: game.deck,
    cardsOnPlay: game.board,
    placeCardHandler: board.placeCardHandler
})

export default connect(mapStateToProps)(Board)