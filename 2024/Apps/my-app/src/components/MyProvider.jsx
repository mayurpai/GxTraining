import React, { Component } from 'react'
import { MyContext } from '../store/MyContext'
import MyConsumer from './MyConsumer'

export default class MyProvider extends Component {
    state = {
        value: "I Am From The Global Context Provider",
    }
    render() {
        return (
            <MyContext.Provider value={this.state.value}>
                {/* <MyConsumer></MyConsumer> */}
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
