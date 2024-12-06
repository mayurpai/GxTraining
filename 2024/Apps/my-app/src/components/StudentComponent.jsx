import React, { Component } from 'react'

export default class StudentComponent extends Component {
    constructor(props) {
        console.log(props)
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            firstName: "Mayur",
            emailIds: ["mayur5pai@gmail.com", "mayurpai@yahoo.com"],
            color: props.color
        }
    }

    // This Needs A Bind
    handleClick() {
        this.setState({ firstName: "Mayur Pai", })
    }
    // Fat Arrow Functions Don't Need A Bind
    handleClick2 = () => {
        this.setState({ firstName: "Mayur Pai", })
    }

    handleClick3 = () => {
        this.setState({ color: "blue", })
    }

    render() {
        const { firstName, emailIds, color } = this.state
        const { id, phone } = this.props
        return (
            <>
                <h1 style={{ color: color }}>Student</h1>
                <p>Id: {id}</p>
                <p>Name: {firstName}</p>
                <p>Email Ids: {emailIds.map((item, index) => {
                    return (
                        <p>{index + 1} - {item}</p>
                    )
                })}</p>
                <p>Phone: {phone}</p>
                <button onClick={this.handleClick}>Change The State</button>
                <button onClick={() => this.handleClick2}>Change The State</button>
                <button onClick={this.handleClick3.bind(this)}>Change The Color</button>

            </>

        )
    }
}
