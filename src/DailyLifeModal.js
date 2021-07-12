import React from 'react'

const DailyLifeModal = (props) => {
  let characterName = props.character.name
  if (characterName[ characterName.length - 1 ] === "s") characterName += "'"
  else characterName += "'s"

  let trustOutcome = props.character.trust + 20
  let timeOutcome = props.player.time - 1

  let maxTrust = <></>
  const handleTrust = (event) => {
    event.preventDefault()
    props.buildTrust(props.character)
    props.deactivateModal(event)
  }

  let modal =
  <div className={props.modal}>
      <div className="modal-background" />
      <div className="modal-card" style={{ border: "solid" }}>
            <header className="modal-card-head" style={{ backgroundColor: "#282C34", border: "none" }}>
                <p className="modal-card-title" style={{ color: "white", fontSize: 30 }}>Build Trust</p>
            </header>

            <section className="modal-card-body" style={{ backgroundColor: "#1FD1B2", fontSize: 24 }}>
                <div className="character columns is-multiline">

                      <div className="column is-half">
                          <p style={{ paddingTop: 20, paddingBottom: 0 }}>
                          Spend time with {props.character.name}?
                          </p>

                          <span className="icon-text">
                              <span style={{ fontWeight: "bold" }}>TRUST {props.character.trust}</span>

                              <span className="icon">
                                  <i className="fas fa-heart"></i>
                              </span>

                              <span className="icon" style={{ paddingRight: 5 }}>
                                <i className="fas fa-arrow-right"></i>
                              </span>

                              <span style={{ fontWeight: "bold" }}>{trustOutcome}</span>
                              <span className="icon">
                                  <i className="fas fa-heart"></i>
                              </span>
                          </span>

                          <span className="icon-text" style={{ color: "#F14668", paddingLeft: 20, paddingRight: 20 }}>
                              <span style={{ fontWeight: "bold" }}>TIME {props.player.time}</span>

                              <span className="icon">
                                <i className="fas fa-hourglass"></i>
                              </span>

                              <span className="icon" style={{ paddingRight: 5 }}>
                                <i className="fas fa-arrow-right"></i>
                              </span>

                              <span style={{ fontWeight: "bold" }}>{timeOutcome}</span>

                              <span className="icon">
                                <i className="fas fa-hourglass"></i>
                              </span>
                          </span>
                      </div>

                      <div className="character column is-half">
                          <img src={props.character.picture} alt={props.character.name} />
                      </div>

                </div>
            </section>

            <footer className="modal-card-foot" style={{ backgroundColor: "#282C34", border: "none" }}>
                <button className="button is-success"
                style={{ fontSize: 18 }}
                onClick={handleTrust}>Yes</button>

                <button className="button"
                style={{ fontSize: 18 }}
                onClick={props.deactivateModal}>No</button>
            </footer>
      </div>
  </div>

  if (props.character.trust === 10) { //Trust Broken
    modal =
    <div className={props.modal}>
        <div className="modal-background" />
        <div className="modal-card" style={{ border: "solid" }}>
              <header className="modal-card-head" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <p className="modal-card-title" style={{ color: "white", fontSize: 30 }}>Build Trust</p>
              </header>

              <section className="modal-card-body" style={{ backgroundColor: "#F14668", fontSize: 24 }}>
                  <span className="icon-text">
                      <div>
                      <span>{characterName} Trust</span>
                      <span className="icon">
                          <i className="fas fa-heart-broken"></i>
                      </span>
                      <span>for you is forever broken. Unable to build trust.</span>
                      </div>
                  </span>
              </section>

              <footer className="modal-card-foot" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <button className="button is-link"
                  style={{ fontSize: 18 }}
                  onClick={props.deactivateModal}>Cancel</button>
              </footer>
        </div>
    </div>
  }

  else if (props.player.time < 1) {
    modal =
    <div className={props.modal}>
        <div className="modal-background" />
        <div className="modal-card" style={{ border: "solid" }}>
              <header className="modal-card-head" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <p className="modal-card-title" style={{ color: "white", fontSize: 30 }}>Build Trust</p>
              </header>

              <section className="modal-card-body" style={{ backgroundColor: "#F14668", fontSize: 24 }}>
                  <span className="icon-text">
                      <div>
                      <span>{props.player.name} has no time</span>
                      <span className="icon">
                          <i className="fas fa-hourglass"></i>
                      </span>
                      <span>left. Unable to build trust. Please enter the AB Room.</span>
                      </div>
                  </span>
              </section>

              <footer className="modal-card-foot" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <button className="button is-link"
                  style={{ fontSize: 18 }}
                  onClick={props.deactivateModal}>Cancel</button>
              </footer>
        </div>
    </div>
  }

  if (props.character.trust === 90) {
    modal =
    <div className={props.modal}>
        <div className="modal-background" />
        <div className="modal-card" style={{ border: "solid" }}>
              <header className="modal-card-head" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <p className="modal-card-title" style={{ color: "white", fontSize: 30 }}>Build Trust</p>
              </header>

              <section className="modal-card-body" style={{ backgroundColor: "#F14668", fontSize: 24 }}>
                  <span className="icon-text">
                      <div>
                      <span>{characterName} Trust</span>
                      <span className="icon">
                          <i className="fas fa-heart"></i>
                      </span>
                      <span>for you is full. Unable to build more trust.</span>
                      </div>
                  </span>
              </section>

              <footer className="modal-card-foot" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <button className="button is-link"
                  style={{ fontSize: 18 }}
                  onClick={props.deactivateModal}>Cancel</button>
              </footer>
        </div>
    </div>
  }

  return (
    <>{modal}</>
  )
}

export default DailyLifeModal
