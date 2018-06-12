import { connect } from 'react-redux'

import { PhaseIndicator } from '../components/phase-indicator/Phase-Indicator'

const mapStateToProps = ({ game }) => ({
    phase: game.phase,
})

export default connect(mapStateToProps)(PhaseIndicator)