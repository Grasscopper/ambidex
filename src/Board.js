import React from 'react'
import SetupGame from './SetupGame'
import DailyLife from './DailyLife'
import DeadlyLife from './DeadlyLife'

const Board = (props) => {
  let phase = <SetupGame G={props.G} moves={props.moves} events={props.events} />

  if (props.ctx.phase === 'dailyLife') {
    phase =
    <DailyLife player={props.G.player}
    teams={props.G.teams}
    buildTrust={props.moves.buildTrust}
    teamNames={props.G.teamNames}
    endPhase={props.events.endPhase} />
  }
  else if (props.ctx.phase === 'deadlyLife') {
    phase =
    <DeadlyLife game={props.G} />
  }

  return (
    <div className="index-container">
      <h1 style={{ color: "#1FD1B2", fontWeight: "bold" }}>Ambidex Game</h1>
      {phase}
    </div>
  )
}

export default Board
