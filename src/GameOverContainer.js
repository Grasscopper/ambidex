import React from 'react'
import { Link } from 'react-router-dom'

import GameOverTile from './GameOverTile'

const GameOverContainer = (props) => {
  const handleReset = (event) => {
    event.preventDefault()
    props.restart()
    props.setPhase("setupGame")
  }

  let winners = ""
  for (let w = 0; w < props.winners.length; w++) {
    if (w === props.winners.length - 1 && props.winners.length !== 1) winners += " and "
    winners += props.winners[w].name
    if (w !== props.winners.length - 1) winners += ", "
  }

  let won = "have won."
  if (props.winners.length === 1) won = "has won."

  let losers = ""
  for (let l = 0; l < props.losers.length; l++) {
    if (l === props.losers.length - 1 && props.losers.length !== 1) losers += " and "
    losers += props.losers[l].name
    if (l !== props.losers.length - 1) losers += ", "
  }

  let lost = "have been trapped forever."
  if (props.losers.length === 1) won = "has been trapped forever."

  let winnerTiles = props.winners.map((winner) => {
    return (
      <GameOverTile character={winner} />
    )
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

                <p className="title" style={{ color: "#22D1C3" }}>Game Over</p>
                <p className="subtitle" style={{ color: "#22D1C3" }}>Day {props.day}</p>



              </div>
          </div>

      </section>
    <div className="index-container">
      <p className="title has-text-white">{winners} {won}</p>
      <p className="title has-text-danger">{losers} {lost}</p>
      <button className="button is-primary" onClick={handleReset}>Reset</button>

      <div className="columns is-multiline" style={{ marginTop: 20 }}>
      {winnerTiles}
      </div>

    </div>
    </>
  )
}

export default GameOverContainer
