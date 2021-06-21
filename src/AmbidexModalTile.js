import React from 'react'

const AmbidexModalTile = (props) => {
  let sum = props.character.trust + 20

  return (
    <div className={props.modal}>
        <div className="modal-background" />
        <div className="modal-card">
              <header className="modal-card-head" style={{ backgroundColor: "#282C34", border: "none" }}>
                  <p className="modal-card-title" style={{ color: "white", fontSize: 30 }}>Build Trust</p>

                  <button className="delete"
                  aria-label="close"
                  style={{ color: "white" }}
                  onClick={props.deactivateModal} />
              </header>

              <section className="modal-card-body" style={{ backgroundColor: "#1FD1B2", fontSize: 24 }}>
                  <div className="character columns is-multiline">

                        <div className="column is-half">
                            <p style={{ paddingTop: 20, paddingBottom: 0 }}>
                            Spend time with {props.character.name}?
                            </p>

                            <span class="icon-text">
                                <span style={{ fontWeight: "bold" }}>TRUST {props.character.trust}</span>
                                <span class="icon">
                                    <i class="fas fa-heart"></i>
                                </span>

                                <span class="icon">
                                  <i class="fas fa-arrow-right"></i>
                                </span>

                                <span style={{ fontWeight: "bold" }}>{sum}</span>
                                <span class="icon">
                                    <i class="fas fa-heart"></i>
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
                  onClick={props.handleTrust}>Yes</button>

                  <button className="button"
                  style={{ fontSize: 18 }}
                  onClick={props.deactivateModal}>No</button>
              </footer>
        </div>
    </div>
  )
}

export default AmbidexModalTile