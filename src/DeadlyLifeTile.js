import React from 'react'

const DeadlyLifeTile = (props) => {
  let color = "column-nest"

  let team = props.team.map((member) => {
    let skill =
    <>
    <p style={{ fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#1FD1B2",
    color: "white",
    marginTop: 10 }}>TRUST {member.trust}</p>
    </>

    if (props.player.name === member.name) {
      color = "player-nest"
      skill =
      <>
      <p style={{ fontSize: 28,
      fontWeight: "bold",
      backgroundColor: "#1FD1B2",
      color: "white",
      marginTop: 10 }}>PLAYER</p>
      </>
    }
    else color = "column-nest"
    let hearts = member.hearts



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

    if (member.trust === 10) { //same as regular icons, but change the color of the hearts
      skill =
      <>
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

    let tile =
    <div className={`character column is-${props.size}`}>
      <div className={color} style={{ height: "100%"}}>
        <h1>{member.name}</h1>
        <img src={member.picture} alt={member.name} />
        <p style={{ fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#48C774",
        marginTop: 10 }}>BRACELET {member.bracelet}</p>
        {skill}
        {icons}
      </div>
    </div>

    if (props.team.length === 1) {
      tile =
      <>
      <div className={`character column is-${props.size}`}>
        <div className={color} style={{ height: "100%" }}>
          <h1>{member.name}</h1>
          <img src={member.picture} alt={member.name} />
          <p style={{ fontSize: 28,
          fontWeight: "bold",
          backgroundColor: "#48C774",
          marginTop: 10 }}>BRACELET {member.bracelet}</p>
          {skill}
          {icons}
        </div>
      </div>
      <div className={`character column is-${props.size}`} />
      </>
    }
    return(<>{tile}</>)
  })

  let rival = props.rival.map((member) => {
    let hearts = member.hearts

    let skill =
    <>
    <p style={{ fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "#1FD1B2",
    color: "white",
    marginTop: 10 }}>TRUST {member.trust}</p>
    </>

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

    color = "rival-nest"
    let tile =
    <div className={`character column is-${props.size}`}>
      <div className={color} style={{ height: "100%" }}>
        <h1>{member.name}</h1>
        <img src={member.picture} alt={member.name} />
        <p style={{ fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#48C774",
        marginTop: 10 }}>BRACELET {member.bracelet}</p>
        {skill}
        {icons}
      </div>
    </div>

    if (props.rival.length === 1) {
      tile =
      <>
      <div className={`character column is-${props.size}`}>
        <div className={color} style={{ height: "100%" }}>
          <h1>{member.name}</h1>
          <img src={member.picture} alt={member.name} />
          <p style={{ fontSize: 28,
          fontWeight: "bold",
          backgroundColor: "#48C774",
          marginTop: 10 }}>BRACELET {member.bracelet}</p>
          {skill}
          {icons}
        </div>
      </div>
      <div className={`character column is-${props.size}`} />
      </>
    }
    return(<>{tile}</>)
  })
  return (
    <>
    {team}
    {rival}
    </>
  )
}

export default DeadlyLifeTile
