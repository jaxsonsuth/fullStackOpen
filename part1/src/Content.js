import React from 'react'
import Part from './Part'

const Content = (props) => {
    console.log(props.parts[0], "2")
  return (
    <>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
    </>
    
  )
}

export default Content