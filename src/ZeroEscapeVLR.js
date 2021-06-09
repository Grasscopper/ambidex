import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

import Title from './Images/VLR/Art/VLR Logo.png'
import Art from './Images/VLR/Art/VLR Section Art.jpg'

import Alice from './Images/VLR/Characters/Alice.jpg'
import Clover from './Images/VLR/Characters/Clover.jpg'
import Dio from './Images/VLR/Characters/Dio.jpg'
import K from './Images/VLR/Characters/K.jpg'
import Luna from './Images/VLR/Characters/Luna.jpg'
import Phi from './Images/VLR/Characters/Phi.jpg'
import Quark from './Images/VLR/Characters/Quark.jpg'
import Sigma from './Images/VLR/Characters/Sigma.jpg'
import Tenmyouji from './Images/VLR/Characters/Tenmyouji.jpg'

const ZeroEscapeVLR = (props) => {
  //Characters from Virtue's Last Reward
  let characters = [
    {
      name: "Sigma",
      game: "Virtue's Last Reward",
      picture: Sigma
    },
    {
      name: "Phi",
      game: "Virtue's Last Reward",
      picture: Phi
    },
    {
      name: "Luna",
      game: "Virtue's Last Reward",
      picture: Luna
    },
    {
      name: "Clover",
      game: "Virtue's Last Reward",
      picture: Clover
    },
    {
      name: "Alice",
      game: "Virtue's Last Reward",
      picture: Alice
    },
    {
      name: "Dio",
      game: "Virtue's Last Reward",
      picture: Dio
    },
    {
      name: "Tenmyouji",
      game: "Virtue's Last Reward",
      picture: Tenmyouji
    },
    {
      name: "Quark",
      game: "Virtue's Last Reward",
      picture: Quark
    },
    {
      name: "K",
      game: "Virtue's Last Reward",
      picture: K
    }
  ]

  let characterTiles = characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })

  return (
    <div className="columns is-multiline">

        <div className="character column is-full" style={{ paddingBottom: 0 }}>
        <img
          src={Title}
          alt="Virtue's Last Reward Logo"
          style={{ border: "none" }}
        />
        </div>

        <div className="character column is-half">
        <img
          src={Art}
          alt="Sigma and Phi"
        />
        </div>

        <div className="column is-half">
              <div className="columns is-multiline">
                    <div className="column is-full">
                    <p className="title has-text-white">Will you choose to ally... Or to betray?</p>
                    </div>
                    <div className="column is-full">
                    <p>He awoke in an elevator. Across the room was a strange girl he’d never met before, even though she seemed to know him…</p>
                    </div>

                    <div className="column is-full">
                    <p>“Sigma…”</p>
                    </div>

                    <div className="column is-full">
                    <p>“How do you know my name?” he asked, but before she could answer a rabbit appeared.</p>
                    </div>

                    <div className="column is-full">
                    <p>“This elevator is about to fall!”</p>
                    </div>

                    <div className="column is-full">
                    <p>Sigma and the girl left the elevator only to find themselves in a massive room with seven other strangers…nine people in all.
                    The strange rabbit told them that they would have to play the Ambidex Game – a game of betrayal.
                    The penalty for losing was death.
                    Could these nine strangers trust one another long enough to escape their prison alive?</p>
                    </div>
              </div>
        </div>

        {characterTiles}
    </div>
  )
}

export default ZeroEscapeVLR
