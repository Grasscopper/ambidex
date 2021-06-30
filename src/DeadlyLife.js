import React from 'react'
import { Link } from 'react-router-dom'
import DeadlyLifeTile from './DeadlyLifeTile'

const DeadlyLife = (props) => {
  let gameOne = <DeadlyLifeTile size={6} player={props.game.player} team={props.game.sideA[0]} rival={props.game.sideB[0]} />
  let gameTwo = <DeadlyLifeTile size={3} player={props.game.player} team={props.game.sideA[1]} rival={props.game.sideB[1]} />
  let gameThree = <DeadlyLifeTile size={3} player={props.game.player} team={props.game.sideA[2]} rival={props.game.sideB[2]} />

  const handleAlly = (event) => {
    event.preventDefault()
    let rivalTrust = 0
    for (let rival = 0; rival < props.game.sideB[0].length; rival++) {
      rivalTrust += props.game.sideB[0][rival].trust
    }
    rivalTrust = rivalTrust / props.game.sideB[0].length

    props.moves.ally(rivalTrust) //handle your decision
    props.moves.ab() //handle the rest of the players' decisions
    props.moves.repopulate() //prepare an array of players to continue our game loop (dailyLife <-> deadlyLife)
    props.events.endPhase() //move back to the building trust phase - dailyLife
  }

  const handleBetray = (event) => {
    event.preventDefault()
    let rivalTrust = 0
    for (let rival = 0; rival < props.game.sideB[0].length; rival++) {
      rivalTrust += props.game.sideB[0][rival].trust
    }
    rivalTrust = rivalTrust / props.game.sideB[0].length

    props.moves.betray(rivalTrust) //handle your decision
    props.moves.ab() //handle the rest of the players' decisions
    props.moves.repopulate() //prepare an array of players to continue our game loop (dailyLife <-> deadlyLife)
    props.events.endPhase() //move back to the building trust phase - dailyLife
  }

  return (
    <>
        <p>
        Each team will decide whether to Ally or to Betray. If both teams Ally,
        then both teams earn points. But if one team chooses to Betray and the other
        team chooses to Ally, then the traitor earns more points and the friend loses points.
        While you yourself have full control of your decision,
        the chance of the rival team choosing to Ally is based on their Trust of you.
        Note: In a PAIR, the average of the two Trust values will be the final Trust value considered.
        </p>

        <div className="columns is-multiline">

            <div className="column is-full">
              <Link to="/">
                <button className="button is-link">
                  Back
                </button>
              </Link>
            </div>

            <div className="column is-4 is-offset-4">
            <button className="button is-success is-large"
            style={{ width: "100%" }}
            onClick={handleAlly}>
              <strong>ALLY</strong>
            </button>
            </div>

            <div className="column is-4 is-offset-4">
            <button className="button is-danger is-large"
            style={{ width: "100%" }}
            onClick={handleBetray}>
              <strong>BETRAY</strong>
            </button>
            </div>

            <div className="column is-full">
                <h2>Player Game</h2>
            </div>
            {gameOne}

            <div className="column is-full">
                <h2 style={{ marginTop: 20 }}>Game 2</h2>
            </div>
            {gameTwo}

            <div className="column is-full">
                <h2 style={{ marginTop: 20 }}>Game 3</h2>
            </div>
            {gameThree}

        </div>
    </>
  )
}

export default DeadlyLife
