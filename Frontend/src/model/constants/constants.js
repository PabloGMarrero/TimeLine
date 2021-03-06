import { Welcome } from './../../components/views/welcome/Welcome'
import { Home } from './../../components/views/home/Home'
import { WaitingGame } from './../../components/views/waiting-game/WaitingGame'
import { AdminCardList } from './../../components/views/admin-cards-list/AdminCardList'
import Game from './../../containers/Game'

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

export const Secciones = {
    WELCOME: 'Welcome',
    HOME: 'Home',
    GAME: 'Game',
    WAITINGGAME: 'Waiting',
    ADMINCARDSLIST: 'AdminCardsList'
}

export function returnComponentForSection(section) {
    switch (section) {
        case Secciones.WELCOME:
            return Welcome

        case Secciones.HOME:
            return Home

        case Secciones.GAME:
            return Game

        case Secciones.WAITINGGAME:
            return WaitingGame

        case Secciones.ADMINCARDSLIST:
            return AdminCardList

        default:
            return Welcome
    }
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
