
export const GameMode = {
    OFFLINE_PLAYER_VERSUS_BOT: 'offline player versus bot',
    ONLINE_TWO_PLAYERS: 'inline two players'
}

export const GameResult = {
    PLAYING: 'playing',
    WINNER: 'winner',
    LOSER: 'loser',
    TIE: 'tie'
}

export const Phase = {
    NOT_ESTABLISHED: 'not established',
    TURN_ASSIGNMENT_PHASE: 'turn assignment phase',
    INITIAL_SETUP_PHASE: 'initial setup phase',
    MAIN_PHASE: 'main phase',
    YEAR_RESOLUTION_PHASE: 'year resolution phase',
    END_TURN_PHASE: 'end turn phase'
}

export const Turn = {
    NOT_ESTABLISHED: 'not established',
    PLAYER: 'player',
    ENEMY: 'enemy'
}

export const Places = {
    CARD: 'card',
    HAND: 'Hand',
    BOARD: 'board',
    DECK: 'deck'
}

export function nextTurn(turn) {
    switch (turn) {

        case Turn.PLAYER:
            return Turn.ENEMY

        case Turn.ENEMY:
            return Turn.PLAYER

        default:
            return Turn.NOT_ESTABLISHED
    }
}

export function nextPhase(phase) {
    switch (phase) {

        case Phase.NOT_ESTABLISHED:
            return Phase.INITIAL_SETUP_PHASE

        case Phase.TURN_ASSIGNMENT_PHASE:
            return Phase.MAIN_PHASE

        case Phase.INITIAL_SETUP_PHASE:
            return Phase.TURN_ASSIGNMENT_PHASE

        case Phase.MAIN_PHASE:
            return Phase.YEAR_RESOLUTION_PHASE

        case Phase.YEAR_RESOLUTION_PHASE:
            return Phase.END_TURN_PHASE

        case Phase.END_TURN_PHASE:
            return Phase.MAIN_PHASE

        default:
            return Phase.NOT_ESTABLISHED
    }
}