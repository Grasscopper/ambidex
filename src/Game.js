import { INVALID_MOVE } from 'boardgame.io/core'
import { nonary, virtue, zero } from './characters.js'

export const Game = {
  setup: () => (
    {
      player: {},
      players: nonary,
      nonary: nonary,
      virtue: virtue,
      zero: zero
    }
  ),

  turn: {
    moveLimit: 1
  },

  moves: {
    selectGame: (G, ctx, id) => {
      switch (id) {
        case 'nonary':
        G.players = G.nonary
        break
        case 'virtue':
        G.players = G.virtue
        break
        case 'zero':
        G.players = G.zero
        break
        default:
        G.players = G.nonary
        break
      }
    },
    selectPlayer: (G, ctx, player) => {
      G.player = player
    }
  },

  phases: {
    phaseZero: { //phase name
      start: true //begin in this phase
    }
  }


}
