import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import ZeroEscapeOverview from './ZeroEscapeOverview'
import ZeroEscapeNNN from './ZeroEscapeNNN'
import ZeroEscapeVLR from './ZeroEscapeVLR'
import ZeroEscapeZTD from './ZeroEscapeZTD'

import { nonary, virtue, zero} from './characters'

const ZeroEscapeIndexContainer = (props) => {
  let setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  let getItem = (key) => {
    let item = JSON.parse(localStorage.getItem(key))
    return item
  }

  useEffect(() => {
    let ls = localStorage
    //if local storage does not exist
    if (!ls.getItem('nonary')) {
      setItem('nonary', nonary)
      for (let z = 0; z < nonary.length; z++) {
        setItem(`${nonary[z].game} ${nonary[z].name}`, nonary[z])
      }
    }

    if (!ls.getItem('virtue')) {
      setItem('virtue', virtue)
      for (let z = 0; z < virtue.length; z++) {
        setItem(`${virtue[z].game} ${virtue[z].name}`, virtue[z])
      }
    }

    if (!ls.getItem('zero')) {
      setItem('zero', zero)
      for (let z = 0; z < zero.length; z++) {
        setItem(`${zero[z].game} ${zero[z].name}`, zero[z])
      }
    }

  }, [])

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
          <Link to="/play">
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
