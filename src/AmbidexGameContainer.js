import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AmbidexGameTile from './AmbidexGameTile'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'
import SigmaVirtue from './Images/VLR/Characters/Sigma.jpg'
import { nonary, virtue, zero} from './characters'

const AmbidexGameContainer = (props) => {
  const [player, setPlayer] = useState({
    name: "",
    game: "",
    picture: ""
  })
  const [characters, setCharacters] = useState([]) //all characters regardless of team
  const [teams, setTeams] = useState( [ [], [], [], [], [], [] ] ) //6 teams of PAIRS and SOLOS

  const version = props.match.params.version //which of the 3 games are we using?
  const findPlayer = props.match.params.name //which player was selected to play as?

  useEffect(() => {
    switch (version) {
      case "9 Hours, 9 Persons, 9 Doors":
        setPlayer(nonary.find( ({ name }) => name === findPlayer ))
        break
      case "Virtue's Last Reward":
        setPlayer(virtue.find( ({ name }) => name === findPlayer ))
        break
      case "Zero Time Dilemma":
        setPlayer(zero.find( ({ name }) => name === findPlayer ))
        break
      default:
        setPlayer(nonary.find( ({ name }) => name === findPlayer ))
        break
    }
  }, [])

  useEffect(() => {
    switch (version) {
      case "9 Hours, 9 Persons, 9 Doors":
        setCharacters(nonary.filter( ({ name }) => name !== findPlayer ))
        break
      case "Virtue's Last Reward":
        setCharacters(virtue.filter( ({ name }) => name !== findPlayer ))
        break
      case "Zero Time Dilemma":
        setCharacters(zero.filter( ({ name }) => name !== findPlayer ))
        break
      default:
        setCharacters(nonary.filter( ({ name }) => name !== findPlayer ))
        break
    }
  }, [])

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
  }

  const assignTeams = (event) => {
    event.preventDefault()

    let currentCharacters = characters //8 characters excluding the player
    currentCharacters.push(player) //9 players including the player
    let shuffledCharacters = shuffle(currentCharacters)  //randomize the 9 characters

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
    setTeams(newTeams)
  }


  let assignTeamsButton =
  <div className="character column is-half is-offset-one-quarter">
    <button
      className="button is-large is-primary"
      style={{ width: "50%" }}
      onClick={assignTeams}>
      <strong>Assign Teams</strong>
    </button>
  </div>

  let pairA = []
  if (teams[0].length == 2) {
    assignTeamsButton = <div></div>

    pairA =
    <>
      <div className="column is-full">
        <h3>PAIR A</h3>
      </div>
      <ZeroEscapeIndexTile key={teams[0][0].name} character={teams[0][0]} />
      <ZeroEscapeIndexTile key={teams[0][1].name} character={teams[0][1]} />
      <div className="column is-one-third" />
    </>
  }

  let soloA = []
  if (teams[1].length == 1) {
    soloA =
    <>
      <div className="column is-full">
        <h3>SOLO A</h3>
      </div>
      <ZeroEscapeIndexTile key={teams[1][0].name} character={teams[1][0]} />
      <div className="column is-two-thirds" />
    </>
  }

  let pairB = []
  if (teams[2].length == 2) {
    pairB =
    <>
      <div className="column is-full">
        <h3>PAIR B</h3>
      </div>
      <ZeroEscapeIndexTile key={teams[2][0].name} character={teams[2][0]} />
      <ZeroEscapeIndexTile key={teams[2][1].name} character={teams[2][1]} />
      <div className="column is-one-third" />
    </>
  }

  let soloB = []
  if (teams[3].length == 1) {
    soloB =
    <>
      <div className="column is-full">
        <h3>SOLO B</h3>
      </div>
      <ZeroEscapeIndexTile key={teams[3][0].name} character={teams[3][0]} />
      <div className="column is-two-thirds" />
    </>
  }

  let pairC = []
  if (teams[4].length == 2) {
    pairC =
    <>
      <div className="column is-full">
        <h3>PAIR C</h3>
      </div>
      <ZeroEscapeIndexTile key={teams[4][0].name} character={teams[4][0]} />
      <ZeroEscapeIndexTile key={teams[4][1].name} character={teams[4][1]} />
      <div className="column is-one-third" />
    </>
  }

  let soloC = []
  if (teams[5].length == 1) {
    soloC =
    <>
      <div className="column is-full">
        <h3>SOLO C</h3>
      </div>
      <ZeroEscapeIndexTile key={teams[5][0].name} character={teams[5][0]} />
      <div className="column is-two-thirds" />
    </>
  }

  let characterTiles = <div></div>
  if (characters.length === 8) {
    characterTiles = characters.map((character) => {
      return (
        <AmbidexGameTile
        key={character.name}
        character={character}
        size={"is-one-quarter"}
        color={"column-nest"}
        />
      )
    })
  }

  return (
    <div>
      <div className="index-container">

        <h1 style={{ color: "#1FD1B2", fontWeight: "bold" }}>Ambidex Game</h1>

        <h2 style={{ border: "none" }}>{player.game}</h2>

        <div className="columns is-multiline">

          <div className="column is-full">
            <Link to="/game">
              <button className="button is-link">
                <strong>Back</strong>
              </button>
            </Link>
          </div>

          {assignTeamsButton}

          <div className="column is-full">
            <h2>Player Selected</h2>
          </div>

          <div className="column is-one-quarter" />

          <AmbidexGameTile
            key={player.id}
            character={player}
            size={"is-half"}
            color={"player-nest"}
          />

          <div className="column is-one-quarter" />


          <div className="column is-full">
            <h2>Opponents</h2>
          </div>

          {pairA}
          {soloA}

          {pairB}
          {soloB}

          {pairC}
          {soloC}

          {characterTiles}

        </div>
      </div>
    </div>
  )
}

export default AmbidexGameContainer
