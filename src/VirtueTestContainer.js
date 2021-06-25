import React, { useState, useEffect } from 'react'
import { setItem, getItem } from './myFunctions.js'
import VirtueTestTile from './VirtueTestTile'
// https://ambidex-api.herokuapp.com
const VirtueTestContainer = (props) => {
  const [ambidex, setAmbidex] = useState(null)

  useEffect(() => {
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

  let characterTiles = <div></div>
  if (ambidex) {
    characterTiles =
    ambidex.games[0].characters.map((character) => {
      return (
        <VirtueTestTile character={character} />
      )
    })
  }

  return (
    <ul>{characterTiles}</ul>
  )
}

export default VirtueTestContainer
