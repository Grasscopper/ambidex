import React from 'react'
import { NavLink } from 'react-router-dom'

const VirtueTestTile = (props) => {
  return (
    <div className="character column is-one-third">
        <NavLink
        to={`/virtue/${props.character.id}`}
        className="inactive-character-tile"
        activeClassName="selected-character-tile">
            <div className="column-nest">
                  <h1>{props.character.name}</h1>
                  <ul>
                      <p>Trust: {props.character.trust}</p>
                      <p>Actions: {props.character.action}</p>
                  </ul>
            </div>
        </NavLink>
    </div>
  )
}

export default VirtueTestTile
