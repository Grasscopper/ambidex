import { INVALID_MOVE } from 'boardgame.io/core'
import { nonary, virtue, zero } from './characters.js'
import { shuffle, styleHearts, getRandomInt } from './myFunctions.js'

export const Game = {
  setup: () => (
    {
      player: {}, //your player
      resetTime: 2,
      result: {
        message: ""
      },
      sideA: [ [], [], [] ], //sideA[1] plays against sideB[1]
      sideB: [ [], [], [] ],
      players: virtue, //all 9 players
      teams: [], //all 6 teams
      teamNames: shuffle(
        ['RED',
        'GREEN',
        'BLUE',
        'MAGENTA',
        'YELLOW',
        'CYAN' ]
      ),
      day: 1,
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
      G.resetTime = player.time
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
    }, //end buildTrust
    ally: (G, ctx, trust) => { //player only; AI opponents have a constant 50% chance to Ally
      let betray = getRandomInt(1, 101)
      if (trust > betray) { //opponent allied too
        G.player = {
          ...G.player,
          bracelet: G.player.bracelet + 2
        }

        G.sideA[0] = G.sideA[0].map((currentCharacter) => {
          let trust = currentCharacter.trust
          //building Trust (+1 Heart) to the player's partner, but only if Trust is not maxed out yet
          //and both teams chose to Ally
          if (currentCharacter.name !== G.player.name && currentCharacter.trust !== 90) trust += 20

          return ({
            ...currentCharacter,
            bracelet: currentCharacter.bracelet + 2,
            trust: trust,
            hearts: styleHearts(trust)
          })
        })

        G.sideB[0] = G.sideB[0].map((currentCharacter) => {
          let trust = currentCharacter.trust
          //build Trust (+1 Heart) with rival team, but only if Trust is not maxed out yet
          //and both teams chose to Ally
          if (currentCharacter.trust !== 90) trust += 20

          return ({
            ...currentCharacter,
            bracelet: currentCharacter.bracelet + 2,
            trust: trust,
            hearts: styleHearts(trust)
          })
        })

        G.result = {
          message: "BEST PALS: The Player and Rival both decided to ALLY. +2 BRACELET Points to each team."
        }
      }
      else { //opponent betrayed you
        G.player = {
          ...G.player,
          bracelet: G.player.bracelet - 2
        }

        G.sideA[0] = G.sideA[0].map((currentCharacter) => {
          return ( { ...currentCharacter, bracelet: currentCharacter.bracelet - 2 } )
        })

        G.sideB[0] = G.sideB[0].map((currentCharacter) => {
          return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 3 } )
        })

        G.result = {
          message: "SUCKER: The Player decided to ALLY, but the Rival chose to BETRAY. The Player's team loses 2 BRACELET Points and the Rival's team earns +3 Points."
        }
      }
    }, //end ally move
    betray: (G, ctx, trust) => { //player only; AI opponents have a constant 50% chance to Ally
      let brokenHearts = [ "fas fa-heart-broken", "fas fa-heart-broken", "fas fa-heart-broken" ]
      let betray = getRandomInt(1, 101)
      if (trust > betray) { //opponent allied while you betrayed them :(
        G.player = {
          ...G.player,
          bracelet: G.player.bracelet + 3
        }

        G.sideA[0] = G.sideA[0].map((currentCharacter) => {
          return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 3 } )
        })

        G.sideB[0] = G.sideB[0].map((currentCharacter) => {
          return ({
            ...currentCharacter,
            bracelet: currentCharacter.bracelet - 2,
            hearts: brokenHearts,
            trust: 10
          })
        })

        G.result = {
          message: "TEMPTATION: The Player chose to BETRAY their ALLY. Their Trust for you is forever broken. The Player gains +3 BRACELET Points and the Rival loses 2 Points."
        }
      }
      else { //you both betray each other
        G.player = {
          ...G.player,
          bracelet: G.player.bracelet + 0
        }

        G.sideA[0] = G.sideA[0].map((currentCharacter) => {
          return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 0 } )
        })

        G.sideB[0] = G.sideB[0].map((currentCharacter) => {
          return ({
            ...currentCharacter,
            bracelet: currentCharacter.bracelet + 0,
            hearts: brokenHearts,
            trust: 10
          })
        })

        G.result = {
          message: "MUTUAL BETRAYAL. The Player and Rival both decided to betray each other. 0 BRACELET Points awarded to each team."
        }
      }
    }, //end betray move
    ab: (G, ctx) => { //play the rest of the game for the AI
      const trust = 50

      for (let team = 1; team < 3; team++) {
          let betray = getRandomInt(1, 101)
          let teamOneAlly = false
          if (trust > betray) teamOneAlly = true

          betray = getRandomInt(1, 101)
          let teamTwoAlly = false
          if (trust > betray) teamTwoAlly = true

          if (teamOneAlly && teamTwoAlly) {
            G.sideA[team] = G.sideA[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 2 } )
            })

            G.sideB[team] = G.sideB[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 2 } )
            })
          } //end both ally

          else if (teamOneAlly && !teamTwoAlly) {
            G.sideA[team] = G.sideA[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet - 2 } )
            })

            G.sideB[team] = G.sideB[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 3 } )
            })
          } //end one betrays the other

          else if (!teamOneAlly && teamTwoAlly) {
            G.sideA[team] = G.sideA[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 3 } )
            })

            G.sideB[team] = G.sideB[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet - 2 } )
            })
          } //end one betrays the other

          else if (!teamOneAlly && !teamTwoAlly) {
            G.sideA[team] = G.sideA[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 0 } )
            })

            G.sideB[team] = G.sideB[team].map((currentCharacter) => {
              return ( { ...currentCharacter, bracelet: currentCharacter.bracelet + 0 } )
            })
          } //end both betray
      } //end for loop

    }, //end ab move

    //setupGame phase: players,
    //dailyLife phase: players -> teams,
    //deadlyLife: teams -> sideA and sideB
    //we need to repopulate G.players because deadlyLife -> dailyLife
    //G.players need to be a 1D array of Objects
    repopulate: (G, ctx) => {
      G.day++

      G.player = {
        ...G.player,
        time: G.resetTime
      }
      let newPlayers = []

      for (let team = 0; team < G.sideA.length; team++) {
        for (let player = 0; player < G.sideA[team].length; player++) {
          newPlayers.push(G.sideA[team][player])
        }
      }
      G.sideA = [ [], [], [] ]

      for (let team = 0; team < G.sideB.length; team++) {
        for (let player = 0; player < G.sideB[team].length; player++) {
          newPlayers.push(G.sideB[team][player])
        }
      }
      G.sideB = [ [], [], [] ]

      G.players = newPlayers
    }
  }, //end moves

  phases: {
    setupGame: { //we have G.players
      start: true, //begin in this phase
      next: 'dailyLife'
    },
    dailyLife: { //dump G.players into G.teams
      onBegin: (G, ctx) => {
        G.teamNames = shuffle(G.teamNames)
        
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
    deadlyLife: { //dump G.teams into G.side[A] and G.side[B]
      onBegin: (G, ctx) => {
        G.teams[0][0] = { //first of all, the player is being stylized for the game
          ...G.teams[0][0],
          trust: 100,
          hearts: styleHearts(90)
        }

        G.sideA[0] = G.teams.shift() //second of all, make sure G.side[0] is the player's team
        let shuffledTeams = shuffle(G.teams) //5 teams left

        G.sideB[0] = G.teams.pop()

        G.sideA[1] = G.teams.pop()
        G.sideB[1] = G.teams.pop()

        G.sideA[2] = G.teams.pop()
        G.sideB[2] = G.teams.pop()
      },
      next: 'dailyLife'
      // onBegin: (G, ctx) => {
      //   let match = shuffle( [1, 2, 3, 4, 5] )
      //   G.teams[0][0] = {
      //     ...G.teams[0][0],
      //     trust: 100,
      //     hearts: styleHearts(90)
      //   }
      //
      //   //the G.sides are copies of the teams
      //   //changing the G.sides doesn't change the G.teams
      //   G.sideA[0] = G.teams[0] //G.teams[0] is always the player's team
      //   G.sideB[0] = G.teams[match[0]]
      //
      //   G.sideA[1] = G.teams[match[1]]
      //   G.sideB[1] = G.teams[match[2]]
      //
      //   G.sideA[2] = G.teams[match[3]]
      //   G.sideB[2] = G.teams[match[4]]
      // }
    } //end deadlyLife
    } //end phases
  } //end Game
