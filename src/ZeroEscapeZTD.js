import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

import Title from './Images/ZTD/Art/ZTD Logo.png'
import Art from './Images/ZTD/Art/ZTD Section Art.jpg'

import Akane from './Images/ZTD/Characters/Akane.jpg'
import Carlos from './Images/ZTD/Characters/Carlos.jpg'
import Diana from './Images/ZTD/Characters/Diana.jpg'
import Eric from './Images/ZTD/Characters/Eric.jpg'
import Junpei from './Images/ZTD/Characters/Junpei.jpg'
import Mira from './Images/ZTD/Characters/Mira.jpg'
import Phi from './Images/ZTD/Characters/Phi.jpg'
import Q from './Images/ZTD/Characters/Q.jpg'
import Sigma from './Images/ZTD/Characters/Sigma.jpg'

const ZeroEscapeZTD = (props) => {
  //Characters from Virtue's Last Reward
  let characters = [
    {
      name: "Carlos",
      game: "Zero Time Dilemma",
      picture: Carlos
    },
    {
      name: "Akane",
      game: "Zero Time Dilemma",
      picture: Akane
    },
    {
      name: "Junpei",
      game: "Zero Time Dilemma",
      picture: Junpei
    },
    {
      name: "Q",
      game: "Zero Time Dilemma",
      picture: Q
    },
    {
      name: "Eric",
      game: "Zero Time Dilemma",
      picture: Eric
    },
    {
      name: "Mira",
      game: "Zero Time Dilemma",
      picture: Mira
    },
    {
      name: "Diana",
      game: "Zero Time Dilemma",
      picture: Diana
    },
    {
      name: "Sigma",
      game: "Zero Time Dilemma",
      picture: Sigma
    },
    {
      name: "Phi",
      game: "Zero Time Dilemma",
      picture: Phi
    }
  ]

  let characterTiles = characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })

  return (
    <div className="columns is-multiline">

        <div className="character column is-full" style={{ paddingBottom: 0, marginTop: 100 }}>
        <img
          src={Title}
          alt="Zero Time Dilemma Logo"
          style={{ border: "none" }}
        />
        </div>

        <div className="character column is-half">
        <img
          src={Art}
          alt="Sigma and Diana"
        />
        </div>

        <div className="column is-half">
              <div className="columns is-multiline">
                    <div className="column is-full">
                    <p className="title has-text-white">December 31, 2028. Nevada desert.</p>
                    </div>
                    <div className="column is-full">
                    <p>Nine people have been living and performing experiments for the past five days in the Dcom facility.</p>
                    </div>

                    <div className="column is-full">
                    <p>On the sixth day, they discover they are trapped in confinement rooms with an unfamiliar black bracelet strapped to their left wrists.</p>
                    </div>

                    <div className="column is-full">
                    <p>A mysterious figure in a mask appears before them, demanding that they play the “Decision Game.”</p>
                    </div>

                    <div className="column is-full">
                    <p>“The lives of you, me, and the human race hang in the balance.”</p>
                    </div>

                    <div className="column is-full">
                    <p>Transported to a shelter underground, they are divided into 3 teams and left in separate wards.</p>
                    </div>

                    <div className="column is-full">
                    <p>The only way out – passing through a locked X-Door to access the elevator.</p>
                    </div>

                    <div className="column is-full">
                    <p>Six passwords are required to unlock the door, and each password is revealed only after a participant dies.</p>
                    </div>

                    <div className="column is-full">
                    <p>Zero’s “Decision Game” will offer teams the opportunity to kill other participants through a variety of means to obtain the necessary passwords so they may escape.</p>
                    </div>

                    <div className="column is-full">
                    <p>"Life is simply unfair, don't you think?"</p>
                    </div>
              </div>
        </div>

        {characterTiles}
    </div>
  )
}

export default ZeroEscapeZTD
