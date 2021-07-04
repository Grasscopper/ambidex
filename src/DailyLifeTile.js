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
  <>
  <p style={{ fontSize: 28,
  fontWeight: "bold",
  backgroundColor: "#48C775",
  marginTop: 10 }}>BRACELET {props.character.bracelet}</p>
  <p style={{ fontSize: 28,
  fontWeight: "bold",
  backgroundColor: "#1FD1B2",
  marginTop: 10 }}>TRUST {props.character.trust}</p>
  </>

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


  //Danganronpa Blood: DC32C6
  if (props.character.trust === 10) { //same as regular icons, but change the color of the hearts
    skill =
    <>
    <p style={{ fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#48C775",
    marginTop: 10 }}>BRACELET {props.character.bracelet}</p>

    <p style={{ fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#1FD1B2",
    color: "#36454F",
    marginTop: 10 }}>TRUST BROKEN</p>
    </>

    icons =
    <span className="icon-text" style={{ padding: 20 }}>
        <span className="icon" style={{ marginLeft: 15, marginRight: 15, color: "#36454F" }}>
        <i className={`${hearts[0]} fa-3x`}></i>
        </span>

        <span className="icon" style={{ marginLeft: 15, marginRight: 15, color: "#36454F" }}>
        <i className={`${hearts[1]} fa-3x`}></i>
        </span>

        <span className="icon" style={{ marginLeft: 15, marginRight: 15, color: "#36454F" }}>
        <i className={`${hearts[2]} fa-3x`}></i>
        </span>
    </span>
  }

  if (props.player.name === props.character.name) {
    color = "player-nest"
    skill =
    <>
    <p style={{ fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#48C775",
    marginTop: 10 }}>BRACELET {props.character.bracelet}</p>
    <p style={{ fontSize: 28,
      fontWeight: "bold",
      backgroundColor: "#1FD1B2",
      marginTop: 10 }}>PLAYER</p>
    </>

    switch (props.player.time) {
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
    }

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

  if (props.player.name === props.character.name && props.solo === false) { //player is unclickable
   tile =
   <div className="character column is-half">
     <div className={color} style={selectableTile}>
       <h1>{props.character.name}</h1>
       <img src={props.character.picture} alt={props.character.name} />
       {skill}
       {icons}
     </div>
   </div>
  }
  else if (props.player.name === props.character.name && props.solo) { //player is unclickable
    tile =
    <>
    <div className="character column is-half">
      <div className={color} style={selectableTile}>
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
    player={props.player}
    character={props.character}
    buildTrust={props.buildTrust}
    deactivateModal={deactivateModal} />
    </>
  )
}

export default DailyLifeTile
