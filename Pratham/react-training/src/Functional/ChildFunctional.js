import React from 'react'

function ChildFunctional(props) {

    const updateProps = () => {
        props.value = props.value + 1;
    }
  return (
    <div>
        <h1>Child Component</h1>
        <div>{props.object.age}</div>
        <div>{props.object.name}</div>
        <div>{props.object.address}</div>
        <div>{props.value}</div>
        <button onClick={updateProps}>Click</button>
    </div>
    
  )
}

export default ChildFunctional