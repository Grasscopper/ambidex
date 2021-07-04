import React from 'react'
import SetupGame from './SetupGame'
import DailyLife from './DailyLife'
import DeadlyLife from './DeadlyLife'

const Board = (props) => {
  let phase = <SetupGame G={props.G} moves={props.moves} events={props.events} />

  if (props.ctx.phase === 'dailyLife') {
    phase =
    <DailyLife
    day={props.G.day}
    result={props.G.result.message}
    player={props.G.player}
    teams={props.G.teams}
    buildTrust={props.moves.buildTrust}
    teamNames={props.G.teamNames}
    endPhase={props.events.endPhase} />
  }
  else if (props.ctx.phase === 'deadlyLife') {
    phase =
    <DeadlyLife game={props.G} moves={props.moves} events={props.events} player={props.G.player} />
  }

  return (
    <>{phase}</>
  )
}

export default Board
