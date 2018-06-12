import { connect } from 'react-redux'

import { Board } from '../components/board/Board'

const mapStateToProps = ({ game }) => ({
    board: game.board,
})

export default connect(mapStateToProps)(Board)