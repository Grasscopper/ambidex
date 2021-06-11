import React from 'react'

const AmbidexIndexTile = (props) => {
  return (
    <div className="character column is-one-third">
      <div className="column-nest">
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
      </div>
    </div>
  )
}

export default AmbidexIndexTile
