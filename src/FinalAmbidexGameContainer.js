import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AmbidexGameTile from './AmbidexGameTile'

const FinalAmbidexGameContainer = (props) => {
  let setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  let getItem = (key) => {
    let item = JSON.parse(localStorage.getItem(key))
    return item
  }

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
  }

  const version = props.match.params.version //which of the 3 games are we using?
  const findPlayer = props.match.params.name //which player was selected to play as?

  const [player, setPlayer] = useState(getItem(`${version} ${findPlayer}`))
  const [characters, setCharacters] = useState(getItem(`${version}`)) //all characters regardless of team
  const [teams, setTeams] = useState( [ [], [], [], [], [], [] ] ) //6 teams of PAIRS and SOLOS

  useEffect(() => {
    let shuffledCharacters = shuffle(characters) //randomize the 9 characters
    let newTeams = [ [], [], [], [], [], [] ] //place shuffled characters here to assign teams

    for (let z = 0; z < newTeams.length; z++) { //z is each of the 6 teams
      if (z === 0 || z % 2 === 0) { //an even index is a PAIR
        newTeams[z].push(shuffledCharacters.pop())
        newTeams[z].push(shuffledCharacters.pop())
      }
      else { //an odd index is a SOLO
        newTeams[z].push(shuffledCharacters.pop())
      }
    }

    if (getItem('teams')) {
      setTeams(getItem('teams'))
    }
    else {
      setItem('teams', newTeams)
      setTeams(newTeams)
    }
  }, [])

  let myTeam = <div></div>

  let teamTiles = <div></div>
  let teamNames =
  ['RED PAIR',
  'GREEN SOLO',
  'BLUE PAIR',
  'MAGENTA SOLO',
  'YELLOW PAIR',
  'CYAN SOLO']

  if (teams[0].length === 2) {
    let counter = 0

    teamTiles = teams.map((team) => {
      let tile = <div></div>

      let currentTeamName = teamNames[counter]
      counter++

      if (team.find( ({ name }) => name === player.name )) {

        if (team.length === 1) {
          myTeam =
          <>
            <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
            <p className="title has-text-white" style={{ marginBottom: 0 }}>{currentTeamName}</p>
            </div>

            <AmbidexGameTile
            key={player.id}
            character={player}
            size={"is-half"}
            color={"player-nest"} />

            <div className="column is-half" />
          </>
        }

        else if (team.length === 2) {

          if (team[0].name === player.name) {
            myTeam =
            <>
              <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
              <p className="title has-text-white" style={{ marginBottom: 0 }}>{currentTeamName}</p>
              </div>

              <AmbidexGameTile
              key={player.id}
              character={player}
              size={"is-half"}
              color={"player-nest"} />

              <AmbidexGameTile
                key={team[1].id}
                character={team[1]}
                size={"is-half"}
                color={"column-nest"} />
            </>
          }

          else if (team[1].name === player.name) {
            myTeam =
            <>
              <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
              <p className="title has-text-white" style={{ marginBottom: 0 }}>{currentTeamName}</p>
              </div>

              <AmbidexGameTile
              key={player.id}
              character={player}
              size={"is-half"}
              color={"player-nest"} />

              <AmbidexGameTile
                key={team[0].id}
                character={team[0]}
                size={"is-half"}
                color={"column-nest"} />
            </>
          }
        }
      }

      else if (team.length === 2) {
        tile =
        <>
          <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
            <p className="title has-text-white" style={{ marginBottom: 0 }}>{currentTeamName}</p>
          </div>

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
        </>
      }

      else if (team.length === 1) {
        tile =
        <>
          <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
            <p className="title has-text-white" style={{ marginBottom: 0 }}>{currentTeamName}</p>
          </div>

          <AmbidexGameTile
          key={team[0].id}
          character={team[0]}
          size={"is-half"}
          color={"column-nest"} />

          <div className="column is-half" />
        </>
      }
      return (<>{tile}</>)
    })
  }

  return (
    <div className="index-container">

      <h1 style={{ color: "#1FD1B2", fontWeight: "bold" }}>Ambidex Game</h1>

      <h2 style={{ border: "none" }}>The game has started. Next step, is a work in progress</h2>

      <div className="columns is-multiline">

        <div className="column is-full">
          <Link to="/play">
            <button className="button is-link">
              <strong>Back</strong>
            </button>
          </Link>
        </div>

        <div className="column is-full"><h2>Player</h2></div>
        {myTeam}

        <div className="column is-full" style={{ marginTop: 20 }}><h2>Opponents</h2></div>
        {teamTiles}
      </div>

    </div>
  )
}

export default FinalAmbidexGameContainer
