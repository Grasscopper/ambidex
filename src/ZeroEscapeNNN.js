import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

import Title from './Images/999/Art/999 Logo.png'
import Art from './Images/999/Art/999 Section Art.jpg'

import Ace from './Images/999/Characters/Ace.jpg'
import Snake from './Images/999/Characters/Snake.jpg'
import Santa from './Images/999/Characters/Santa.jpg'
import Clover from './Images/999/Characters/Clover.jpg'
import Junpei from './Images/999/Characters/Junpei.jpg'
import June from './Images/999/Characters/June.jpg'
import Seven from './Images/999/Characters/Seven.jpg'
import Lotus from './Images/999/Characters/Lotus.jpg'
import NinthMan from './Images/999/Characters/Ninth Man.jpg'

const ZeroEscapeNNN = (props) => {
  //Characters from 9 Hours, 9 Persons, 9 Doors
  let characters = [
    {
      name: "Ace",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Ace
    },
    {
      name: "Snake",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Snake
    },
    {
      name: "Santa",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Santa
    },
    {
      name: "Clover",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Clover
    },
    {
      name: "Junpei",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Junpei
    },
    {
      name: "June",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: June
    },
    {
      name: "Seven",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Seven
    },
    {
      name: "Lotus",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: Lotus
    },
    {
      name: "Ninth Man",
      game: "9 Hours, 9 Persons, 9 Doors",
      picture: NinthMan
    }
  ]

  let characterTiles = characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })

  return (
    <div className="columns is-multiline">

        <div className="column is-one-third" />

        <div className="character column is-one-third" style={{ paddingBottom: 0 }}>
        <img
          src={Title}
          alt="9 Hours, 9 Persons, 9 Doors Logo"
          style={{ border: "none", paddingBottom: 20, marginTop: 20 }}
        />
        </div>

        <div className="column is-one-third" />

        <div className="character column is-half">
        <img
          src={Art}
          alt="999 Cast"
          style={{ border: "none" }}
        />
        </div>

        <div className="column is-half">
              <div className="columns is-multiline">
                    <div className="column is-full">
                      <p className="title has-text-white">The water is rising, there are 9 doors and time is running out...</p>
                    </div>

                    <div className="column is-full">
                      <p>
                      Junpei awakens to find himself locked in a flooding room. He notices
                      he is wearing a bracelet on his wrist that won't come off.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      He solves the puzzle
                      and escapes to find 8 others prisoners all wearing the same bracelet.
                      On a speaker, the mastermind known as "Zero" announces the Nonary Game.
                      A game that must be played and won to escape.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      Each person has been assigned a unique nonary number on their bracelet.
                      Using their numbers together and solving the corresponding puzzle,
                      the teams can pass through the 9 doors.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      However, they are on a sinking ship and only have 9 hours
                      to escape through door number 9. Losing the game or running out of
                      time means certain death.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      The countdown has begun.
                      </p>
                    </div>
              </div>
        </div>

        {characterTiles}
    </div>
  )
}

export default ZeroEscapeNNN
