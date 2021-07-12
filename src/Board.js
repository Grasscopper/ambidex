import React from 'react'
import SetupGame from './SetupGame'
import DailyLife from './DailyLife'
import DeadlyLife from './DeadlyLife'
import GameOverContainer from './GameOverContainer'

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
    setGameResults={props.moves.setGameResults}
    setPhase={props.events.setPhase}
    endGame={props.events.endGame}
    endPhase={props.events.endPhase} />
  }
  else if (props.ctx.phase === 'deadlyLife') {
    phase =
    <DeadlyLife game={props.G} moves={props.moves} events={props.events} player={props.G.player} />
  }

  else if (props.ctx.phase === 'gameOver') {
    phase =
    <GameOverContainer
    day={props.G.day}
    restart={props.moves.restart}
    setPhase={props.events.setPhase}
    player={props.G.player}
    winners={props.G.winners}
    losers={props.G.losers} />
  }

  return (
    <>{phase}</>
  )
}

export default Board
