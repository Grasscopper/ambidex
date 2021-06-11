import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AmbidexIndexTile from './AmbidexIndexTile'
import { nonary, virtue, zero} from './characters'

const AmbidexIndexContainer = (props) => {
  const [player, setPlayer] = useState(virtue[0])
  const [characters, setCharacters] = useState(nonary)
  const [selectedGames, setSelectedGames] = useState([true, false, false])

  let gameOne = "button is-primary"
  let gameTwo = "button"
  let gameThree = "button"

  if (selectedGames[0]) {
    gameOne = "button is-primary"
    gameTwo = "button"
    gameThree = "button"
  }
  else if (selectedGames[1]) {
    gameOne = "button"
    gameTwo = "button is-primary"
    gameThree = "button"
  }
  else if (selectedGames[2]) {
    gameOne = "button"
    gameTwo = "button"
    gameThree = "button is-primary"
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

      <h2>Choose a game and your player character</h2>
      <div className="columns is-multiline">
        <div className="column is-full">
          <Link to="/">
            <button className="button is-primary">Back to Home</button>
          </Link>
        </div>
        <div className="character column is-one-third">
          <button id="nonary" className={gameOne} onClick={chooseGame}>
            <strong>999</strong>
          </button>
        </div>

        <div className="character column is-one-third">
          <button id="virtue" className={gameTwo} onClick={chooseGame}>
            <strong>VLR</strong>
          </button>
        </div>

        <div className="character column is-one-third">
          <button id="zero" className={gameThree} onClick={chooseGame}>
            <strong>ZTD</strong>
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

//Persisting state in local storage
// import createPersistedState from 'use-persisted-state'
// const useProtagonistState = createPersistedState('protagonist')
// const [protagonist, setProtagonist] = useProtagonistState(virtue[0]) //Sigma
