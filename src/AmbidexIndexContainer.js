import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AmbidexIndexTile from './AmbidexIndexTile'

import { nonary, virtue, zero} from './characters'
import createPersistedState from 'use-persisted-state'

const AmbidexIndexContainer = (props) => {
  // const [characters, setCharacters] = useState(nonary) //an array of characters
  const useSelectedCharacters = createPersistedState('selectedCharacters')
  const [characters, setCharacters] = useSelectedCharacters(nonary)

  // const [selectedGames, setSelectedGames] = useState([true, false, false])
  const useSelectedGames = createPersistedState('selectedGames')
  const [selectedGames, setSelectedGames] = useSelectedGames([true, false, false])

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

  const chooseGame = (event) => {
    event.preventDefault()
    switch (event.currentTarget.id) {
      case "nonary":
        setCharacters(nonary)
        setSelectedGames([true, false, false])
        break
      case "virtue":
        setCharacters(virtue)
        setSelectedGames([false, true, false])
        break
      case "zero":
        setCharacters(zero)
        setSelectedGames([false, false, true])
        break
      default:
        setCharacters(nonary)
        setSelectedGames([true, false, false])
        break
    }
  }

  let characterTiles = characters.map((character) => {
    return (
      <AmbidexIndexTile key={character.name} character={character} />
    )
  })

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
