import React from 'react'

//same as the ZeroEscapeIndexTile, but with a customizable color and size
const AmbidexGameTile = (props) => {
  let column = "character column "
  column += props.size
  return (
    <div className={column}>
      <div className={props.color}>
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
      </div>
    </div>
  )
}

export default AmbidexGameTile
