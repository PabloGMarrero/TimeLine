import React, { Component } from 'react'
import shuffle from 'shuffle-array'

export const pickCardFromDeck = (deck) => deck.pop()

export const shuffleDeck = (deck) => shuffle(deck)