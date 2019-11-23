import React from 'react'

const Test = (props) => {
  return (
  <div onClick={props.personClicked}>Hello {props.person}!</div>
  )
}

export default Test
