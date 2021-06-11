import React from 'react'
import { Link } from 'react-router-dom'
import ZeroEscapeOverview from './ZeroEscapeOverview'
import ZeroEscapeNNN from './ZeroEscapeNNN'
import ZeroEscapeVLR from './ZeroEscapeVLR'
import ZeroEscapeZTD from './ZeroEscapeZTD'

const ZeroEscapeIndexContainer = (props) => {
  //GREEN WEBSITE TITLE COLOR: #1FD1B2
  return (
    <div>
    
      <section className="hero is-small">
        <div className="hero-body">
          <p className="title" style={{ color: "#1FD1B2" }}>
          Zero Escape
          </p>
          <p className="subtitle has-text-white">
          A visual novel adventure series
          </p>
          <Link to="/game">
          <button className="button is-primary">
            <strong>Play Ambidex Game</strong>
          </button>
          </Link>
        </div>
      </section>

      <div className="index-container">
        <ZeroEscapeOverview />
        <h2>Games</h2>
        <ZeroEscapeNNN />
        <ZeroEscapeVLR />
        <ZeroEscapeZTD />
      </div>

    </div>
  )
}

export default ZeroEscapeIndexContainer