import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SetupGameTile from './SetupGameTile'

const SetupGame = (props) => {
  const [selectedGames, setSelectedGames] = useState( [false, true, false] )

  let gameOne = "button is-medium is-primary is-outlined"
  let gameTwo = "button is-medium is-primary is-active"
  let gameThree = "button is-medium is-primary is-outlined"

  if (selectedGames[0]) {
    gameOne = "button is-medium is-primary is-active "
    gameTwo = "button is-medium is-primary is-outlined"
    gameThree = "button is-medium is-primary is-outlined"
  }
  else if (selectedGames[1]) {
    gameOne = "button is-medium is-primary is-outlined"
    gameTwo = "button is-medium is-primary is-active"
    gameThree = "button is-medium is-primary is-outlined"
  }
  else if (selectedGames[2]) {
    gameOne = "button is-medium is-primary is-outlined"
    gameTwo = "button is-medium is-primary is-outlined"
    gameThree = "button is-medium is-primary is-active "
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
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <div className="navbar-item">

            <p className="title" style={{ letterSpacing: "-0.05em", color: "white" }}>Ambidex Game</p>

          </div>
        </div>
      </nav>

      <div className="index-container">

        <div className="columns is-multiline">

          <div className="column is-full">
            <p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5 }}>
            Game Select
            </p>
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

          <div className="column is-full">
            <p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5 }}>
            Player Select
            </p>
          </div>

          {boardTiles}
        </div>
      </div>
    </>
  )
}

export default SetupGame
