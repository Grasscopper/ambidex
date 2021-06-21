import React from 'react'
import { buildTrust } from './myFunctions.js'

//same as the ZeroEscapeIndexTile, but with customizable CSS
const AmbidexGamePlayerTile = (props) => {
  let column = "character column "
  column += props.size

  const icons =
  <span className="icon-text" style={{ padding: 20 }}>
      <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
      <i className="fas fa-heart fa-3x"></i>
      </span>

      <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
      <i className="fas fa-heart fa-3x"></i>
      </span>

      <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
      <i className="fas fa-heart fa-3x"></i>
      </span>
  </span>

  return (
    <div className={column} style={{  }}>
      <div className={props.color} style={{ height: "100%" }}>
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
        <p style={{ fontSize: 28,
          fontWeight: "bold",
          backgroundColor: "#1FD1B2",
          marginTop: 10 }}>PLAYER</p>
        {icons}
      </div>
    </div>
  )
}

export default AmbidexGamePlayerTile
