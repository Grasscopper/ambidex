import React from 'react'
import { NavLink } from 'react-router-dom'

const AmbidexIndexTile = (props) => {
  return (
    <div className="character column is-one-third">
      <NavLink
        to={`/game/${props.character.game}/${props.character.name}`}
        className="inactive-character-tile"
        activeClassName="selected-character-tile">
        <div className="column-nest">
          <h1>{props.character.name}</h1>
          <img src={props.character.picture} alt={props.character.name} />
        </div>
      </NavLink>
    </div>
  )
}

export default AmbidexIndexTile

//Original AmbidexIndexTile
//----------------------------
// <div className="character column is-one-third">
//   <NavLink
//     to={`game/${props.character.game}/${props.character.name}`}
//     className="inactive-character-tile"
//     activeClassName="selected-character-tile">
//     <div className="column-nest">
//       <h1>{props.character.name}</h1>
//       <img src={props.character.picture} alt={props.character.name} />
//     </div>
//   </NavLink>
// </div>
