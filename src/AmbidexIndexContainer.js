import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AmbidexIndexTile from './AmbidexIndexTile'

import createPersistedState from 'use-persisted-state'

const AmbidexIndexContainer = (props) => {
  let setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  let getItem = (key) => {
    let item = JSON.parse(localStorage.getItem(key))
    return item
  }

  useEffect(() => {
    if (getItem('teams')) {
      localStorage.removeItem('teams')
    }
  }, [])

  const useSelectedGames = createPersistedState('selectedGames')
  const [selectedGames, setSelectedGames] = useSelectedGames([true, false, false, 'nonary'])

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

  let characters = []

  switch (selectedGames[3]) {
    case "nonary":
      characters = getItem("nonary")
      break
    case "virtue":
      characters = getItem("virtue")
      break
    case "zero":
      characters = getItem("zero")
      break
    default:
      characters = getItem("nonary")
      break
  }

  const chooseGame = (event) => {
    event.preventDefault()
    switch (event.currentTarget.id) {
      case "nonary":
        setSelectedGames([true, false, false, "nonary"])
        break
      case "virtue":
        setSelectedGames([false, true, false, "virtue"])
        break
      case "zero":
        setSelectedGames([false, false, true, "zero"])
        break
      default:
        setSelectedGames([true, false, false, "nonary"])
        break
    }
  }

  let characterTiles = []
  if (characters.length > 0) {
    characterTiles = characters.map((character) => {
      return (
        <AmbidexIndexTile key={character.id} character={character} />
      )
    })
  }

  return (
    <div className="index-container">
      <h1 style={{ color: "#1FD1B2", fontWeight: "bold" }}>Ambidex Game</h1>

      <h2 style={{ border: "none" }}>Choose a game and your player character</h2>
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

export default AmbidexIndexContainer

//update one object property in a state
// setState({
//   ...student,
//   ultimate: "Ultimate Detective"
// })
