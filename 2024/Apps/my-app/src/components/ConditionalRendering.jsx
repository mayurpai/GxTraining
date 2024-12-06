import React, { Component } from 'react'

function UserGreeting() {
    return <h1>Hello User</h1>
}
function GuestGreeting() {
    return <h1>Hello Guest</h1>
}

function Greeting({ isLoggedIn }) {
    if (isLoggedIn)
        return <UserGreeting></UserGreeting>
    return <GuestGreeting></GuestGreeting>
}

function Button({ onClick, name }) {
    return <button onClick={onClick} id={name}>{name}</button>
}
let button = null;


export default class LoginControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
        }
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn,
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
    render() {

        if (this.state.isLoggedIn) {
            button = <Button onClick={() => this.handleLogout()} name="Logout"></Button>

        } else {

                button = <Button onClick={() => this.handleLogin()} name="Login"></Button>

        }
        return (
            <div>
                {button}
                <Greeting isLoggedIn={this.state.isLoggedIn}></Greeting>
            </div>
        )
    }
}
