import React from 'react'

export default function ImageContainer(props) {
    const {source} = props
    const styles = {
        height: "3rem",
        display: "flex",
        justifyContent: "center",
        placeItems: "center",
        margin: "1rem"
    }
    return (
        <img style={styles} src={source} alt='source'></img>
    )
}
