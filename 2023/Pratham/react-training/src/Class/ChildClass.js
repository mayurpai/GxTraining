import React, {Component} from 'react'

export default class ChildClass extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }

      this.handleClick = this.handleClick.bind(this);
    }



    componentWillUnmount (){
        document.removeEventListener('mousedown', this.handleClick)
        console.log("Unmounted");   
    }

    handleClick (){
        console.log("handleClick")
    }

    componentDidMount () {
        document.addEventListener('mousedown', this.handleClick)
    }

    updatevalue () {
        // document.addEventListener('mousedown', this.handleClick)
    }

    render(){
        return(
            <div>
                <h1>Child Component</h1>
                <div>{this.props.count}</div>
                <button onClick={() => this.updatevalue()}>Click</button>
            </div>
        )
    }
}