import React from 'react'
import ZeroEscapeOverview from './ZeroEscapeOverview'
import ZeroEscapeNNN from './ZeroEscapeNNN'
import ZeroEscapeVLR from './ZeroEscapeVLR'

const ZeroEscapeIndexContainer = (props) => {
  //ORIGNAL WEBSITE TITLE COLOR: #13947E
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
        </div>
      </section>

      <div id="Zero-Escape-Index-Container">
        <ZeroEscapeOverview />
        <h2>Games</h2>
        <ZeroEscapeNNN />
        <ZeroEscapeVLR />
      </div>

    </div>
  )
}

export default ZeroEscapeIndexContainer
