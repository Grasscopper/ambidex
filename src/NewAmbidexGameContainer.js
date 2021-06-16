import React, { useState, useEffect } from 'react'
import AmbidexGameTile from './AmbidexGameTile'

import { nonary, virtue, zero} from './characters'
// import createPersistedState from 'use-persisted-state'

// <AmbidexGameTile
//   key={player.name}
//   character={player}
//   size={"is-half"}
//   color={"player-nest"} />

const NewAmbidexGameContainer = (props) => {
  // const usePlayer = createPersistedState('player')
  // const [player, setPlayer] = usePlayer({ //character selected in AmbidexIndexContainer
  //   name: "",
  //   game: "",
  //   picture: ""
  // })
  //
  // const useCharacters = createPersistedState('ambidexCharacters')
  // const [characters, setCharacters] = useCharacters([])
  //
  // const useTeam = createPersistedState('teams')
  // const [teams, setTeams] = useTeam([ [], [], [], [], [], [] ])


  const [player, setPlayer] = useState({ //character selected in AmbidexIndexContainer
    id: 50,
    name: "",
    game: "",
    picture: ""
  })
  const [characters, setCharacters] = useState([]) //all characters regardless of team
  const [teams, setTeams] = useState( [ [], [], [], [], [], [] ] ) //6 teams of PAIRS and SOLOS

  const version = props.match.params.version //which of the 3 games are we using?
  const findPlayer = props.match.params.name //which player was selected to play as?

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
  }

  useEffect(() => {
    let shuffledCharacters = []
    let newTeams = [ [], [], [], [], [], [] ] //place shuffled characters here to assign teams

    switch (version) {
      case "nonary":
        setPlayer(nonary.find( ({ name }) => name === findPlayer ))
        setCharacters(nonary)
        shuffledCharacters = shuffle(nonary)  //randomize the 9 characters

        for (let z = 0; z < newTeams.length; z++) { //z is each of the 6 teams
          if (z === 0 || z % 2 === 0) { //an even index is a PAIR
            newTeams[z].push(shuffledCharacters.pop())
            newTeams[z].push(shuffledCharacters.pop())
          }
          else { //an odd index is a SOLO
            newTeams[z].push(shuffledCharacters.pop())
          }
        }

        setTeams(newTeams)
        break

      case "virtue":
        setPlayer(virtue.find( ({ name }) => name === findPlayer ))
        setCharacters(virtue)
        shuffledCharacters = shuffle(virtue)  //randomize the 9 characters

        for (let z = 0; z < newTeams.length; z++) { //z is each of the 6 teams
          if (z === 0 || z % 2 === 0) { //an even index is a PAIR
            newTeams[z].push(shuffledCharacters.pop())
            newTeams[z].push(shuffledCharacters.pop())
          }
          else { //an odd index is a SOLO
            newTeams[z].push(shuffledCharacters.pop())
          }
        }

        setTeams(newTeams)
        break

      case "zero":
        setPlayer(zero.find( ({ name }) => name === findPlayer ))
        setCharacters(zero)
        shuffledCharacters = shuffle(zero)  //randomize the 9 characters

        for (let z = 0; z < newTeams.length; z++) { //z is each of the 6 teams
          if (z === 0 || z % 2 === 0) { //an even index is a PAIR
            newTeams[z].push(shuffledCharacters.pop())
            newTeams[z].push(shuffledCharacters.pop())
          }
          else { //an odd index is a SOLO
            newTeams[z].push(shuffledCharacters.pop())
          }
        }

        setTeams(newTeams)
        break

      default:
        setPlayer(nonary.find( ({ name }) => name === findPlayer ))
        setCharacters(nonary)
        shuffledCharacters = shuffle(nonary)  //randomize the 9 characters

        for (let z = 0; z < newTeams.length; z++) { //z is each of the 6 teams
          if (z === 0 || z % 2 === 0) { //an even index is a PAIR
            newTeams[z].push(shuffledCharacters.pop())
            newTeams[z].push(shuffledCharacters.pop())
          }
          else { //an odd index is a SOLO
            newTeams[z].push(shuffledCharacters.pop())
          }
        }

        setTeams(newTeams)
        break
    }
  }, [])

  let teamTiles = <div></div>
  if (teams[0].length === 2) {
    teamTiles = teams.map((team) => {
      let tile = <div></div>
      if (team.length === 2) {
        tile =
        <div>
        <AmbidexGameTile
        key={team[0].id}
        character={team[0]}
        size={"is-half"}
        color={"column-nest"} />
        <AmbidexGameTile
        key={team[1].id}
        character={team[1]}
        size={"is-half"}
        color={"column-nest"} />
        </div>
      }
      else if (team.length === 1) {
        tile =
        <div>
        <AmbidexGameTile
        key={team[0].id}
        character={team[0]}
        size={"is-half"}
        color={"column-nest"} />
        </div>
      }
      return (<>{tile}</>)
    })
  }

  return (
    <div>
    <h1>NewAmbidexGameContainer</h1>
    {teamTiles}
    </div>
  )
}

export default NewAmbidexGameContainer
