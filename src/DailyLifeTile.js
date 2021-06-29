import React, { useState } from 'react'
import DailyLifeModal from './DailyLifeModal'

const DailyLifeTile = (props) => {
  const [modal, setModal] = useState("modal")

  const activateModal = (event) => {
    event.preventDefault()
    setModal("modal is-active")
  }

  const deactivateModal = (event) => {
    event.preventDefault()
    setModal("modal")
  }

  let color = "column-nest"

  let skill =
  <p style={{ fontSize: 28,
  fontWeight: "bold",
  backgroundColor: "#1FD1B2",
  marginTop: 10 }}>TRUST {props.character.trust}</p>

  let selectableTile = { height: "100%", cursor: "pointer" }

  let hearts = props.character.hearts

  let icons =
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

  if (props.player.name === props.character.name) {
    color = "player-nest"
    skill =
    <p style={{ fontSize: 28,
      fontWeight: "bold",
      backgroundColor: "#1FD1B2",
      marginTop: 10 }}>PLAYER</p>
    icons =
    <span className="icon-text" style={{ padding: 20 }}>
        <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
            <i className="fas fa-hourglass fa-3x"></i>
        </span>

        <span className="icon" style={{ marginLeft: 15, marginRight: 15 }}>
            <i className="fas fa-hourglass fa-3x"></i>
        </span>
    </span>
    selectableTile = { height: "100%" }
  }

  let tile =
  <div className="character column is-half">
    <div className={color} style={selectableTile} onClick={activateModal}>
      <h1>{props.character.name}</h1>
      <img src={props.character.picture} alt={props.character.name} />
      {skill}
      {icons}
    </div>
  </div>

  if (props.solo) {
    tile =
    <>
    <div className="character column is-half">
      <div className={color} style={selectableTile} onClick={activateModal}>
        <h1>{props.character.name}</h1>
        <img src={props.character.picture} alt={props.character.name} />
        {skill}
        {icons}
      </div>
    </div>
    <div className="column is-half" />
    </>
  }

  return (
    <>
    {tile}
    <DailyLifeModal
    modal={modal}
    character={props.character}
    buildTrust={props.buildTrust}
    deactivateModal={deactivateModal} />
    </>
  )
}

export default DailyLifeTile
