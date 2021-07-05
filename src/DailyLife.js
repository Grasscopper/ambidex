import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DailyLifeTile from './DailyLifeTile'

import { shuffle } from './myFunctions'

const DailyLife = (props) => {
  const [tutorial, setTutorial] = useState(false)

  useEffect(() => {
    let winners = []
    let losers = []

    const teams = [...props.teams]
    for (let team = 0; team < teams.length; team++) {
      for (let player = 0; player < teams[team].length; player++) {
        if (teams[team][player].bracelet >= 9) winners.push(teams[team][player])
        else losers.push(teams[team][player])
      }
    }

    if (winners.length > 0) {
      props.setGameResults(winners, losers)
      props.setPhase("gameOver")
    }
  }, [])

  const handleTutorial = (event) => {
    event.preventDefault()
    setTutorial(!tutorial)
  }

  let tutorialSelected = ""
  let showTutorial = <></>

  if (tutorial) {
    tutorialSelected = "has-background-danger-light"
    showTutorial =
    <section className="hero is-small is-primary" onClick={handleTutorial}>
      <div className="hero-body">

        <p className="title">
          Tutorial
        </p>
        <p className="subtitle">
          How to Play the Daily Life Phase
        </p>

        <section className="section has-background-primary-light notification">
          <h1 className="title" style={{ color: "black" }}>
          Spending Time with Others
          </h1>

          <div className="content" style={{ color: "black" }}>
            <p>
            Select 2 characters to build their Trust.
            The higher their Trust, the more likely they are to Ally.
            After you spend your time, click "Enter the AB Room" to
            advance to the next stage and test your Trust with the other
            prisoners.
            </p>
          </div>
        </section>

        <section className="section has-background-primary-light notification">
          <h1 className="title" style={{ color: "black" }}>
          Game Consequences
          </h1>

          <div className="content" style={{ color: "black" }}>
            <p>
            When you come back from the AB Room, and begin a new day,
            your choice will change your relationships. If both teams
            chose to Ally, then your partner (if any) and the
            opponent team will build Trust (+1 Heart). However,
            if you Betray their Ally, then the opponent team's Trust
            for you will be forever broken. Their Trust for you will
            become 10 and can never be repaired.
            </p>
          </div>
        </section>

      </div>
    </section>
  }

  const handlePhase = (event) => {
    event.preventDefault()
    props.endPhase()
  }

  let result = <></>
  if (props.result.length > 0) {
    result =
    <>
    <div className="column is-offset-4 is-4 has-background-primary" style={{ textAlign: "left" }}>
    <strong style={{ color: "white" }}>{props.result}</strong>
    </div>

    <div className="column is-4" />
    </>
  }

  let playerName = props.player.name
  if (playerName[ playerName.length - 1 ] === "s") playerName += "'"
  else playerName += "'s"

  let index = 0
  let newTiles = props.teams.map((team) => {
    index++

    let header = <></>
    if (index === 1) header =
    <div className="column is-full"><p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5 }}>Player Team</p></div>

// <div className="column is-full" style={{ marginTop: 20 }}><h2>Rival Teams</h2></div>
    if (index === 2) header =
    <div className="column is-full" style={{ marginTop: 20 }}><p className="title" style={{ color: "white", borderBottom: "solid", paddingBottom: 5 }}>Opponent Teams</p></div>


    let tile = <div></div>
    let teamName = props.teamNames[index - 1]

    if (team.length === 2) {
      tile =
      <>
      {header}
      <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
      <p className="title has-text-white" style={{ marginBottom: 0 }}>{teamName} PAIR</p>
      </div>
      <DailyLifeTile player={props.player} character={team[0]} solo={false} buildTrust={props.buildTrust} />
      <DailyLifeTile player={props.player} character={team[1]} solo={false} buildTrust={props.buildTrust} />
      </>
    }
    else {
      tile =
      <>
      {header}
      <div className="column is-full" style={{ marginTop: 20, paddingBottom: 0 }}>
      <p className="title has-text-white" style={{ marginBottom: 0 }}>{teamName} SOLO</p>
      </div>
      <DailyLifeTile player={props.player} character={team[0]} solo={true} buildTrust={props.buildTrust} />
      </>
    }

    return (<>{tile}</>)
  })

  return (
    <>
      <section className="hero is-small is-primary">
          <div className="hero-body">
              <p className="title">Ambidex Game</p>
              <p className="subtitle">The Prisoner's Dilemma</p>
          </div>
          <div className="hero-foot" style={{ padding: 24, paddingTop: 0 }}>
            <Link to="/">
              <button className="button is-link is-outlined" style={{ marginRight: 10 }}>
                <strong>
                Back
                </strong>
              </button>
            </Link>
          </div>
      </section>

      <section className="hero has-background-primary-light" style={{ paddingBottom: 10 }}>
          <div className="hero-body">
              <div className="container has-text-centered">

                <p className="title" style={{ color: "#22D1C3" }}>Daily Life</p>
                <p className="subtitle" style={{ color: "#22D1C3" }}>Day {props.day}</p>

                <div className="columns is-multiline">
                    <div className="column is-offset-4 is-4">
                        <button className="button is-primary is-medium is-outlined" style={{ width: "75%" }} onClick={handlePhase}>
                        <strong>Enter AB Room</strong>
                        </button>
                    </div>

                    <div className="column is-4" />

                    {result}
                </div>

              </div>
          </div>

          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li><a className={tutorialSelected} style={{ color: "#22D1C3" }} onClick={handleTutorial}>Tutorial</a></li>
                </ul>
              </div>
            </nav>
          </div>
      </section>

      {showTutorial}

      <div className="index-container">
        <div className="columns is-multiline">
        {newTiles}
        </div>
      </div>
    </>
  )
}

export default DailyLife
