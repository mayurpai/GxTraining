import React from 'react'

export default class Greeting extends React.Component {
    constructor() {
        super()

        this.state = {
            name: 'World'
        }
    }
    render() {
        return (
            <>
                <div>{this.props.name}</div>
                <div>{this.state.name}</div>
            </>
        )
    }
}
