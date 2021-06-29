import React from 'react'
import { Link } from 'react-router-dom'
import DailyLifeTile from './DailyLifeTile'

import { shuffle } from './myFunctions'

const DailyLife = (props) => {
  let teamNames =
  ['RED',
  'GREEN',
  'BLUE',
  'MAGENTA',
  'YELLOW',
  'CYAN']
  shuffle(teamNames)

  let index = 0
  let newTiles = props.teams.map((team) => {
    index++

    let header = <></>
    if (index === 1) header = <div className="column is-full"><h2>Player</h2></div>
    if (index === 2) header = <div className="column is-full" style={{ marginTop: 20 }}><h2>Opponents</h2></div>

    let tile = <div></div>
    let teamName = teamNames.pop()

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
    <h2 style={{ border: "none" }}>
    The Ambidex Game has started. Select 2 characters to build their trust.
    The higher their trust, the more likely they are to Ally.</h2>
      <div className="columns is-multiline">
      <div className="column is-full">
        <Link to="/">
          <button className="button is-link">
            <strong>Back</strong>
          </button>
        </Link>
      </div>
      {newTiles}
      </div>
    </>
  )
}

export default DailyLife
