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

  let pairA = []
  if (teams[0].length == 2) { //teams[0] is a 2 element array
    pairA = teams[0].map((character) => {
      return (
        <ZeroEscapeIndexTile key={character.name} character={character} />
      )
    })
  }

  return (
    <div>
      <div className="index-container">

        <h1 style={{ color: "#1FD1B2", fontWeight: "bold" }}>Ambidex Game</h1>

        <h2 style={{ border: "none" }}>{player.game}</h2>

        <div className="columns is-multiline">

          {pairA}

          <div className="column is-full">
            <Link to="/game">
              <button className="button is-link">
                <strong>Back</strong>
              </button>
            </Link>
          </div>

          <div className="character column is-half is-offset-one-quarter">
            <button
              className="button is-large is-primary"
              style={{ width: "50%" }}
              onClick={assignTeams}
            >
              <strong>Assign Teams</strong>
            </button>
          </div>

          <div className="is-half is-offset-one-quarter">
              <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button className="delete" aria-label="close"></button>
                  </header>
                  <section className="modal-card-body">
                    <h1>Start Game</h1>
                  </section>
                  <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button">Cancel</button>
                  </footer>
                </div>
              </div>
          </div>

          <div className="column is-full">
            <h2>Player</h2>
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
          {characterTiles}

        </div>
      </div>
    </div>
  )
}

export default AmbidexGameContainer
