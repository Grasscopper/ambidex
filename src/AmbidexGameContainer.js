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
  const [characters, setCharacters] = useState([])
  const [resetGame, setResetGame] = useState(false)

  const version = props.match.params.version
  const findPlayer = props.match.params.name

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
  }, [resetGame])

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
  }, [resetGame])

  let characterTiles = <div></div>
  if (characters.length === 8) {
    characterTiles = characters.map((character) => {
      console.log(player.name)
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
