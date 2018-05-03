export const START_GAME = 'START_GAME'

export const startGame = (deck, board, playerHand, enemyHand) => ({
    type: START_GAME,
    deck,
    board,
    playerHand,
    enemyHand
})

export const SHUFFLE_DECK = 'SHUFFLE_DECK'

export const shuffleDeck = () => ({
    type: SHUFFLE_DECK,
})

export const PLAYER_DRAW_CARD = 'PLAYER_DRAW_CARD'

export const playerDrawCard = () => ({
    type: PLAYER_DRAW_CARD,
})

export const ENEMY_DRAW_CARD = 'ENEMY_DRAW_CARD'

export const enemyDrawCard = () => ({
    type: ENEMY_DRAW_CARD,
})

export const PLAY_INITIAL_CARD_FROM_DECK = 'PLAY_INITIAL_CARD_FROM_DECK'

export const playInitialCardFromDeck = () => ({
    type: PLAY_INITIAL_CARD_FROM_DECK,
})