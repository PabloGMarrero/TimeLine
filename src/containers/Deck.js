import { connect } from 'react-redux'

import { Deck } from '../components/deck/Deck'

const mapStateToProps = ({ game }) => ({
    deck: game.deck,
})

export default connect(mapStateToProps)(Deck)