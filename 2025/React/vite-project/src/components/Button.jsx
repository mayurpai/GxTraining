import React from 'react'

const Button = (props) => {
    const {name, color} = props
    console.log(props)
    let colorValue = color
    colorValue = "green"

    props.color = "yellow"
    console.log(colorValue)
    return (
        <button style={{ backgroundColor: color }}>
            {name}
        </button>
    )
}

export default Button
