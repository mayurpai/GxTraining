import React from 'react'

export default function Functional2(props) {

    if(props.name == "Mayur"){
        throw new Error("name is not correct!")
    }
  return (
    <div>{props.name}</div>
  )
}
