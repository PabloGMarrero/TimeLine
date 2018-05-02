import React, { Component } from 'react'

import { createSlots, addCard, getCardFromSlot } from "../slot/slot"

export const cardsBoard = (boardSize) => createSlots(boardSize)