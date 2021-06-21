import React, { useState } from 'react'
import AmbidexModalTile from './AmbidexModalTile'
import { buildTrust } from './myFunctions.js'

//same as the ZeroEscapeIndexTile, but with customizable CSS
const AmbidexGameTile = (props) => {
  let [modal, setModal] = useState("modal")

  const activateModal = (event) => {
    event.preventDefault()
    setModal("modal is-active")
  }

  const deactivateModal = (event) => {
    event.preventDefault()
    setModal("modal")
  }

  const handleTrust = (event) => {
    event.preventDefault()
    setModal("modal")
    props.sendBuildTrust(props.character)
  }

  let column = "character column "
  column += props.size

  let hearts = props.character.hearts

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
    <>
        <div className={column}>
          <div className={props.color} style={{ height: "100%", cursor: "pointer" }} onClick={activateModal}>
            <h1>{props.character.name}</h1>
            <img src={props.character.picture} alt={props.character.name} />
            <p style={{ fontSize: 28,
              fontWeight: "bold",
              backgroundColor: "#1FD1B2",
              marginTop: 10 }}>TRUST {props.character.trust}</p>
            {icons}
          </div>
        </div>

        <AmbidexModalTile
        character={props.character}
        modal={modal}
        handleTrust={handleTrust}
        deactivateModal={deactivateModal} />
    </>
  )
}

export default AmbidexGameTile
