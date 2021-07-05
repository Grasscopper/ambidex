import React from 'react'

const GameOverTile = (props) => {
  return (
    <div className="character column is-one-third">
      <div className="column-nest" style={{ height: "100%" }}>
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
        <p style={{ fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#48C775",
        marginTop: 10 }}>BRACELET {props.character.bracelet}</p>
      </div>
    </div>
  )
}

export default GameOverTile
