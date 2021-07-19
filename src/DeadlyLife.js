import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeadlyLifeTile from './DeadlyLifeTile'

const DeadlyLife = (props) => {
  const [tutorial, setTutorial] = useState(false)

  const handleTutorial = (event) => {
    event.preventDefault()
    setTutorial(!tutorial)
  }

  let tutorialSelected = ""
  let showTutorial = <></>

  if (tutorial) {
    tutorialSelected = "has-background-danger-light"
    showTutorial =
    <section className="hero is-small is-info" onClick={handleTutorial}>
      <div className="hero-body">

        <p className="title">
          Tutorial
        </p>
        <p className="subtitle">
          How to Use the AB Room
        </p>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          How to Escape
          </h1>

          <div className="content" style={{ color: "white" }}>
              <p>
              Earn 9 BRACELET Points.
              </p>
          </div>

        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          Decision
          </h1>

          <div className="content" style={{ color: "white" }}>
              <p>
              Each team will decide whether to <strong>ALLY</strong> or <strong>BETRAY</strong>. If both teams ally,
              then both teams earn points. But if one team chooses to betray and the other
              team chooses to be an ally, then the traitor earns more points and the friend loses points.
              While you yourself have full control of your decision,
              the chance of the rival team choosing to ally is based on their <strong>Trust</strong> of you.
              Note: In a PAIR, the average of the two Trust values will be the final Trust value considered.
              </p>
          </div>
        </section>

        <section className="section notification" style={{ backgroundColor: "#282C34" }}>
          <h1 className="title" style={{ color: "white" }}>
          Points
          </h1>

          <div className="content" style={{ color: "white" }}>
              <p>
              Both teams ALLY: +2, +2.
              </p>
              <p>
              One team BETRAYS their ALLY: Traitor +3, Friend -2
              </p>
              <p>
              Both teams BETRAY: +0, +0.
              </p>
          </div>

        </section>

      </div>
    </section>
  }

  let gameOne = <DeadlyLifeTile size={6} player={props.player} team={props.game.sideA[0]} rival={props.game.sideB[0]} />
  let gameTwo = <DeadlyLifeTile size={3} player={props.player} team={props.game.sideA[1]} rival={props.game.sideB[1]} />
  let gameThree = <DeadlyLifeTile size={3} player={props.player} team={props.game.sideA[2]} rival={props.game.sideB[2]} />

  let playerName = props.player.name
  if (playerName[ playerName.length - 1 ] === "s") playerName += "'"
  else playerName += "'s"

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
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <div className="navbar-item">

          <p className="title" style={{ "letter-spacing": "-0.05em", color: "white" }}>Ambidex Game</p>

        </div>
      </div>
    </nav>

    <section className="hero" style={{ backgroundColor: "#183153" }}>
        <div className="hero-body">
            <div className="container has-text-centered">

              <p className="title" style={{ color: "white", fontSize: 48 }}>
              AB Room
              </p>

              <div className="columns is-multiline">
              <div className="column is-4 is-offset-4">
              <button className="button is-success is-large is-outlined"
              style={{ width: "100%" }}
              onClick={handleAlly}>
                <strong>ALLY</strong>
              </button>
              </div>

              <div className="column is-4 is-offset-4">
              <button className="button is-danger is-large is-outlined"
              style={{ width: "100%" }}
              onClick={handleBetray}>
                <strong>BETRAY</strong>
              </button>
              </div>
              </div>

            </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li><a className={tutorialSelected} style={{ color: "#63E6BE" }} onClick={handleTutorial}>Tutorial</a></li>
              </ul>
            </div>
          </nav>
        </div>

    </section>

    {showTutorial}

    <div className="index-container">

        <div className="columns is-multiline">

            <div className="column is-full">
            <p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5 }}>
            Player Game</p>
            </div>
            {gameOne}

            <div className="column is-full">
            <p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5, marginTop: 30 }}>
            Game 2</p>
            </div>
            {gameTwo}

            <div className="column is-full">
            <p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5, marginTop: 30 }}>
            Game 3</p>
            </div>
            {gameThree}

        </div>
    </div>
    </>
  )
}

export default DeadlyLife
