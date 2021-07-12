import React from 'react'

const GameOverTile = (props) => {
  let lost = {}
  if (props.lost) lost = { filter: "grayscale(1)" }

  return (
        <>
        <img src={props.character.picture} alt={props.character.name} style={lost}/>
        </>
  )
}

export default GameOverTile
