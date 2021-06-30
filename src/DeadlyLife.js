import React from 'react'
import DeadlyLifeTile from './DeadlyLifeTile'

const DeadlyLife = (props) => {
  let mainEvent = <DeadlyLifeTile size={6} team={props.game.sideA[0]} rival={props.game.sideB[0]} />
  let actOne = <DeadlyLifeTile size={3} team={props.game.sideA[1]} rival={props.game.sideB[1]} />
  let actTwo = <DeadlyLifeTile size={3} team={props.game.sideA[2]} rival={props.game.sideB[2]} />

  return (
    <>
    <h2 style={{ border: "none" }}>Choose to Ally or Betray.</h2>
    <div className="columns is-multiline">
    <div className="column is-full">
    <h2>Main Event</h2>
    </div>
    {mainEvent}
    <div className="column is-full">
    <h2>Act One</h2>
    </div>
    {actOne}
    <div className="column is-full">
    <h2>Act Two</h2>
    </div>
    {actTwo}
    </div>
    </>
  )
}

export default DeadlyLife
