import React from 'react'
import Art from './Images/Series/999 Cast.png'

const ZeroEscapeOverview = (props) => {
  let p = {
    paddingTop: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: "0px"
  }

  return (
    <>
      <h2>Overview</h2>

      <div className="columns">
        <div className="column is-half" style={{ textAlign: "center" }}>
        <img
          src={Art}
          alt="999 Cast"
          style={{ marginTop: 27, border: "none" }}
        />
        </div>

        <div className="column is-half">
          <p className="title has-text-white" style={p}>Let the games begin!</p>
          <p style={p}>
          Zero Escape is a video game trilogy of visual novel adventures
          featuring puzzle solving and branching story paths created by
          video game developer Spike Chunsoft. The series first launched in Japan in 2009
          with "9 Hours, 9 Persons, 9 Doors" on the Nintendo DS.
          The second game, Virtue's Last Reward, was released in 2012
          and the third and final game, Zero Time Dilemma, launched in 2016.</p>
          <p style={p}>
          The setting of each game involves 9 persons who are kidnapped
          and brought to an isolated environment cut off from the outside
          world. The mastermind behind each game is known as "Zero"
          and forces them to play a deadly game to escape. While surviving
          their capture, we learn about time travel, the
          interesting characters, and the secrets of the "Nonary Games".</p>
        </div>

      </div>
    </>
  )
}

export default ZeroEscapeOverview
