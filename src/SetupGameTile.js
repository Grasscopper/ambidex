import React from 'react'

const SetupGameTile = (props) => {
  const handlePlayer = (event) => {
    event.preventDefault()
    props.selectPlayer(props.character)
    props.endPhase()
  }

  return (
    <div className="character column is-one-third">
      <div className="column-nest hover-tile" style={{ cursor: "pointer" }} onClick={handlePlayer}>
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
      </div>
    </div>
  )
}

export default SetupGameTile
