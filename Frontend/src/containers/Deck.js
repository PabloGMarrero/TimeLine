import { connect } from 'react-redux'

import { Deck } from '../components/deck/Deck'

const mapStateToProps = ({ game }) => ({
    deck: game.deck,
    cards: game.cards
})

export default connect(mapStateToProps)(Deck)
