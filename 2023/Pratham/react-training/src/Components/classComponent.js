import React, { Component } from 'react'
import NewClass from './NewClass';

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 0,
            data: {
                address: "Nashik",
                color: "blue"
            }
        }
        // this.updateState = this.updateState.bind(this);
        // this.resetState = this.resetState.bind(this);
    }

    updateState () {
        this.setState({name : this.state.name+1});
        let data2 = this.state.data
        data2.address = "pune"
        data2.car = "BMW"
        this.setState({ data : data2})
        console.log(this.state.data);
    }

    resetState() {
        this.setState({name : 0})
    }
    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={this.updateState.bind(this)}>Update</button>
                <button onClick={this.resetState.bind(this)}>reset</button>
                <NewClass 
                count= {this.state.name}
                updateState= {this.updateState}/>
            </div>

        )
    }
}
