import React from 'react'
import { Link } from 'react-router-dom'

import GameOverTile from './GameOverTile'

const GameOverContainer = (props) => {
  const handleReset = (event) => {
    event.preventDefault()
    props.restart()
    props.setPhase("setupGame")
  }

  let escape = "ZERO ESCAPE"
  let escapeSub = `${props.player.name} lost the Ambidex Game`
  let escapeColor = "#F14668"
  if (props.player.bracelet >= 9) {
    escape = `${props.player.name} Escaped`
    escapeSub = `${props.player.name} won the Ambidex Game`
    escapeColor = "#48C774"
  }

  let winners = ""
  for (let w = 0; w < props.winners.length; w++) {
    if (w === props.winners.length - 1 && props.winners.length !== 1) winners += " and "
    winners += props.winners[w].name
    if (w !== props.winners.length - 1 && props.winners.length !== 2) winners += ", "
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
      <GameOverTile character={winner} lost={false} />
    )
  })

  let loserTiles = props.losers.map((loser) => {
    return (
      <GameOverTile character={loser} lost={true} />
    )
  })

  // <div className="columns is-multiline" style={{ marginTop: 20 }}>
  // {winnerTiles}
  // </div>

  return (
    <>
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <div className="navbar-item">

          <p className="title" style={{ "letter-spacing": "-0.05em", color: "white" }}>Ambidex Game</p>

        </div>
      </div>
    </nav>

      <section className="hero" style={{ paddingBottom: 10, backgroundColor: "#183153" }}>
          <div className="hero-body">
              <div className="container has-text-centered">

                <p className="title" style={{ color: escapeColor, fontSize: 48 }}>{escape}</p>
                <p className="title" style={{ color: "white" }}>{escapeSub}</p>
                <button className="button is-primary is-medium is-outlined" style={{ color: "#63E6BE", borderColor: "#63E6BE" }} onClick={handleReset}>Reset Game</button>
              </div>
          </div>

      </section>

      <section className="hero is-small">
        <div className="hero-body has-text-centered">
          <p className="title" style={{ color: "white" }}>{winners} {won}</p>
          <div className="is-flex-direction-row">
          {winnerTiles}
          </div>
        </div>
      </section>

      <section className="hero is-small">
        <div className="hero-body has-text-centered">
          <p className="title" style={{ color: "white" }}>{losers} {lost}</p>
          <div className="is-flex-direction-row">
          {loserTiles}
          </div>
        </div>
      </section>
    </>
  )
}

export default GameOverContainer
