import { INVALID_MOVE } from 'boardgame.io/core'
import { nonary, virtue, zero } from './characters.js'
import { shuffle, styleHearts } from './myFunctions.js'

export const Game = {
  setup: () => (
    {
      player: {}, //your player
      sideA: [ [], [], [] ], //sideA[1] plays against sideB[1]
      sideB: [ [], [], [] ],
      players: virtue, //all 9 players
      teams: [], //all 6 teams
      teamNames: shuffle(  ['RED',
        'GREEN',
        'BLUE',
        'MAGENTA',
        'YELLOW',
        'CYAN']),
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
    },

    buildTrust: (G, ctx, character) => {
      if (G.player.time > 0) {
        G.teams = G.teams.map((team) => {
          return (
            team.map((currentCharacter) => {
              let trust = currentCharacter.trust
              if (character.id === currentCharacter.id) {
                trust += 20
              }
              return (
                {
                  ...currentCharacter,
                  trust: trust,
                  hearts: styleHearts(trust)
                }
              )
            })
          )
        }) //end map function
        G.player.time--
      } //end if statement
    } //end buildTrust
  }, //end moves

  phases: {
    setupGame: { //phase name
      start: true, //begin in this phase
      next: 'dailyLife'
    },
    dailyLife: {
      onBegin: (G, ctx) => {
        let shuffledPlayers = shuffle(G.players) //randomize the 9 characters
        let teams = [] //place shuffled characters here to assign teams

          for (let bracelet = 0; bracelet < 6; bracelet++) { //bracelet is each of the 6 teams
              if (bracelet === 0 || bracelet % 2 === 0) { //an even index is a PAIR
                let newTeam = []
                newTeam.push(shuffledPlayers.pop())
                newTeam.push(shuffledPlayers.pop())

                newTeam.find(player => player.id === G.player.id) ? teams.unshift(newTeam) : teams.push(newTeam)
              }
              else { //an odd index is a SOLO
                let newTeam = []
                newTeam.push(shuffledPlayers.pop())

                newTeam.find(player => player.id === G.player.id) ? teams.unshift(newTeam) : teams.push(newTeam)
              }
          }
          //if the player is the second element in a PAIR, make the player the first element
          let playerTeam = teams[0]
          if (playerTeam.length === 2 && playerTeam[1].id === G.player.id) {
            [ playerTeam[0], playerTeam[1] ] = [ playerTeam[1], playerTeam[0] ]
          }

          // G.playerTeam = teams[0]
          G.teams = teams
        }, //end onBegin
        next: 'deadlyLife'
      }, //end dailyLife
    deadlyLife: {
      onBegin: (G, ctx) => {
        let match = shuffle( [1, 2, 3, 4, 5] )
        G.sideA[0] = G.teams[0] //G.teams[0] is always the player's team
        G.sideB[0] = G.teams[match[0]]

        G.sideA[1] = G.teams[match[1]]
        G.sideB[1] = G.teams[match[2]]

        G.sideA[2] = G.teams[match[3]]
        G.sideB[2] = G.teams[match[4]]
      }
    } //end deadlyLife
    } //end phases
  } //end Game
