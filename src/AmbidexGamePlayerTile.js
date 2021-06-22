import React from 'react'
import { buildTrust } from './myFunctions.js'

const AmbidexGamePlayerTile = (props) => {
  let column = "character column "
  column += props.size

  let icons = <div></div>

  switch (props.time) {

    case 2:
        icons =
        <span className="icon-text" style={{ padding: 20 }}>
            <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
                <i className="fas fa-hourglass fa-3x"></i>
            </span>

            <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
                <i className="fas fa-hourglass fa-3x"></i>
            </span>
        </span>
    break

    case 1:
        icons =
        <span className="icon-text" style={{ padding: 20 }}>
            <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
                <i className="fas fa-hourglass fa-3x"></i>
            </span>

            <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
                <i className="far fa-hourglass fa-3x"></i>
            </span>
        </span>
    break

    case 0:
        icons =
        <span className="icon-text" style={{ padding: 20 }}>
            <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
                <i className="far fa-hourglass fa-3x"></i>
            </span>

            <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
                <i className="far fa-hourglass fa-3x"></i>
            </span>
        </span>
    break

    default:
    break
  }

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
