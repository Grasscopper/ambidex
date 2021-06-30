import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SetupGameTile from './SetupGameTile'

const SetupGame = (props) => {
  const [selectedGames, setSelectedGames] = useState( [false, true, false] )

  let gameOne = "button is-medium is-primary"
  let gameTwo = "button is-medium"
  let gameThree = "button is-medium"

  if (selectedGames[0]) {
    gameOne = "button is-medium is-primary"
    gameTwo = "button is-medium"
    gameThree = "button is-medium"
  }
  else if (selectedGames[1]) {
    gameOne = "button is-medium"
    gameTwo = "button is-medium is-primary"
    gameThree = "button is-medium"
  }
  else if (selectedGames[2]) {
    gameOne = "button is-medium"
    gameTwo = "button is-medium"
    gameThree = "button is-medium is-primary"
  }

  const handleGame = (event) => {
    event.preventDefault()
    const id = event.currentTarget.id

    switch (id) {
      case "nonary":
        props.moves.selectGame(id)
        setSelectedGames( [true, false, false] )
        break
      case "virtue":
        props.moves.selectGame(id)
        setSelectedGames( [false, true, false] )
        break
      case "zero":
        props.moves.selectGame(id)
        setSelectedGames( [false, false, true] )
        break
      default:
        props.moves.selectGame(id)
        setSelectedGames( [true, false, false] )
        break
    }
  }

  let boardTiles = props.G.players.map((player) => {
    return (
      <SetupGameTile
      key={player.id}
      character={player}
      selectPlayer={props.moves.selectPlayer}
      endPhase={props.events.endPhase} />
    )
  })

  return (
    <>
      <h2 style={{ border: "none" }}>Choose a game and your player character.</h2>
      <div className="columns is-multiline">

        <div className="column is-full">
          <Link to="/">
            <button className="button is-link">
              Back
            </button>
          </Link>
        </div>

        <div className="character column is-one-third">
          <button id="nonary" className={gameOne} onClick={handleGame} style={{ width: "100%" }}>
            <strong>9 Hours, 9 Persons, 9 Doors</strong>
          </button>
        </div>

        <div className="character column is-one-third">
          <button id="virtue" className={gameTwo} onClick={handleGame} style={{ width: "100%" }}>
          <strong>Virtue's Last Reward</strong>
          </button>
        </div>

        <div className="character column is-one-third">
          <button id="zero" className={gameThree} onClick={handleGame} style={{ width: "100%" }}>
            <strong>Zero Time Dilemma</strong>
          </button>
        </div>

        {boardTiles}
      </div>
    </>
  )
}

export default SetupGame
