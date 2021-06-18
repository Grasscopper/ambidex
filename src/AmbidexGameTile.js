import React from 'react'
import { buildTrust } from './myFunctions.js'

//same as the ZeroEscapeIndexTile, but with customizable CSS
const AmbidexGameTile = (props) => {
  let column = "character column "
  column += props.size

  let hearts = props.character.hearts

  const handleTrust = (event) => {
    event.preventDefault()
    props.sendBuildTrust(props.character)
  }

  const icons =
  <span className="icon-text" style={{ padding: 20 }}>
      <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
      <i className={`${hearts[0]} fa-3x`}></i>
      </span>

      <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
      <i className={`${hearts[1]} fa-3x`}></i>
      </span>

      <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
      <i className={`${hearts[2]} fa-3x`}></i>
      </span>
  </span>

  return (
    <div className={column} style={{  }}>
      <div className={props.color} style={{ height: "100%", cursor: "pointer" }} onClick={handleTrust}>
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
        <p style={{ fontSize: 18 }}>This is my team!</p>
        {icons}
      </div>
    </div>
  )
}

export default AmbidexGameTile
