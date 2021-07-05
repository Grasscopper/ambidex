import React from 'react'
import { Client } from 'boardgame.io/react'
import { Game } from './Game'
import Board from './Board'

const BoardGame = Client({ game: Game, board: Board, numPlayers: 1, debug: false })

export default BoardGame
