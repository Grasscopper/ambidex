import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import VirtueTestTile from './VirtueTestTile'

import { setItem, getItem } from './myFunctions.js'
import createPersistedState from 'use-persisted-state'

// https://ambidex-api.herokuapp.com
const VirtueTestContainer = (props) => {
  const [ambidex, setAmbidex] = useState(null)

  const useSelectedGames = createPersistedState('selectedGames')
  const [selectedGames, setSelectedGames] = useSelectedGames([true, false, false])

  useEffect(() => { //create or use an existing Ambidex Game
    if (getItem('session')) { //return to session
      const session = getItem('session')
      fetch(`https://ambidex-api.herokuapp.com/ambidexes/${session}`)
      .then(response => response.json())
      .then(body => setAmbidex(body.ambidex))
      .catch(error => console.error(error))
    }
    else { //new session
      fetch("https://ambidex-api.herokuapp.com/ambidexes")
      .then(response => response.json())
      .then((body) => {
        setItem('session', body.ambidex.key) //so we can return to our Ambidex Game
        setAmbidex(body.ambidex)
      })
      .catch(error => console.error(error))
    }
  }, [])

  let gameOne = "button is-medium is-primary"
  let gameTwo = "button is-medium"
  let gameThree = "button is-medium"
  let characters = []

  if (selectedGames[0]) {
    gameOne = "button is-medium is-primary"
    gameTwo = "button is-medium"
    gameThree = "button is-medium"
    if (ambidex) characters = ambidex.games[0].characters
  }
  else if (selectedGames[1]) {
    gameOne = "button is-medium"
    gameTwo = "button is-medium is-primary"
    gameThree = "button is-medium"
    if (ambidex) characters = ambidex.games[1].characters
  }
  else if (selectedGames[2]) {
    gameOne = "button is-medium"
    gameTwo = "button is-medium"
    gameThree = "button is-medium is-primary"
    if (ambidex) characters = ambidex.games[2].characters
  }

  const chooseGame = (event) => {
    event.preventDefault()
    switch (event.currentTarget.id) {
      case "nonary":
        setSelectedGames([true, false, false])
        break
      case "virtue":
        setSelectedGames([false, true, false])
        break
      case "zero":
        setSelectedGames([false, false, true])
        break
      default:
        setSelectedGames([true, false, false])
        break
    }
  }

  let characterTiles = <div></div>
  if (ambidex) {
    characterTiles =
    characters.map((character) => {
      return (
        <VirtueTestTile character={character} />
      )
    })
  }

  return (
    <div className="index-container">
      <h1 style={{ color: "#1FD1B2", fontWeight: "bold" }}>Ambidex Game</h1>

      <h2 style={{ border: "none" }}>Choose a game and your player character.</h2>
      <div className="columns is-multiline">

        <div className="column is-full">
          <Link to="/">
            <button className="button is-link">
              <strong>Back</strong>
            </button>
          </Link>
        </div>

        <div className="character column is-one-third">
          <button id="nonary" className={gameOne} onClick={chooseGame} style={{ width: "100%" }}>
            <strong>9 Hours, 9 Persons, 9 Doors</strong>
          </button>
        </div>

        <div className="character column is-one-third">
          <button id="virtue" className={gameTwo} onClick={chooseGame} style={{ width: "100%" }}>
          <strong>Virtue's Last Reward</strong>
          </button>
        </div>

        <div className="character column is-one-third">
          <button id="zero" className={gameThree} onClick={chooseGame} style={{ width: "100%" }}>
            <strong>Zero Time Dilemma</strong>
          </button>
        </div>

        {characterTiles}
      </div>

    </div>
  )
}

export default VirtueTestContainer
