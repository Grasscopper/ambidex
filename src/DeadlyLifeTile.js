import React from 'react'

const DeadlyLifeTile = (props) => {
  let color = "column-nest"

  let team = props.team.map((member) => {
    let tile =
    <div className={`character column is-${props.size}`}>
      <div className={color} style={{ height: "100%" }}>
        <h1>{member.name}</h1>
        <img src={member.picture} alt={member.name} />
        <p style={{ fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#1FD1B2",
        marginTop: 10 }}>TRUST {member.trust}</p>
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
          backgroundColor: "#1FD1B2",
          marginTop: 10 }}>TRUST {member.trust}</p>
        </div>
      </div>
      <div className={`character column is-${props.size}`} />
      </>
    }
    return(<>{tile}</>)
  })

  let rival = props.rival.map((member) => {
    color = "rival-nest"
    let tile =
    <div className={`character column is-${props.size}`}>
      <div className={color} style={{ height: "100%" }}>
        <h1>{member.name}</h1>
        <img src={member.picture} alt={member.name} />
        <p style={{ fontSize: 28,
        fontWeight: "bold",
        backgroundColor: "#1FD1B2",
        marginTop: 10 }}>TRUST {member.trust}</p>
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
          backgroundColor: "#1FD1B2",
          marginTop: 10 }}>TRUST {member.trust}</p>
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
