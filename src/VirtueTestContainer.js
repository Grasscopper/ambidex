import React, { useState, useEffect } from 'react'
import VirtueTestTile from './VirtueTestTile'

const VirtueTestContainer = (props) => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch("https://ambidex-api.herokuapp.com/characters")
    .then(response => response.json())
    .then(body => setCharacters(body))
    .catch(error => console.error(error))
  }, [])

  const characterTiles = characters.map((character) => {
    return (
      <VirtueTestTile character={character} />
    )
  })

  return (
    <ul>{characterTiles}</ul>
  )
}

export default VirtueTestContainer
