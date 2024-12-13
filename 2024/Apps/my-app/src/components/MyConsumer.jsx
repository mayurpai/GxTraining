import React, { Component } from 'react'
import { MyContext } from '../store/MyContext'

export default class MyConsumer extends Component {
    static contextType = MyContext
  render() {
    return (
    //   <MyContext.Consumer>
    //     {value => (
    //         <h1>{value}</h1>
    //     )}
    //   </MyContext.Consumer>
    <div>
        This Is From The Context: {this.context}
    </div>
    )
  }
}
