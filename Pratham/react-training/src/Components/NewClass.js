import React, {Component} from 'react'

export default class NewClass extends Component{
    render(){
        return(
            <div>
                {this.props.count}
                <br/>
                <button onClick={() => this.props.updateState()}>click me</button>
            </div>
        )
    }
}