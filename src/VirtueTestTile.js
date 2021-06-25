import React from 'react'

const VirtueTestTile = (props) => {
  return (
    <li>Name: {props.character.name}, Trust: {props.character.trust}, Actions: {props.character.action}</li>
  )
}

export default VirtueTestTile
