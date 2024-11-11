import React, { Component } from 'react'

export class ErrorHandling extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isError : false
      }
    }


    static getDerivedStateFromError() {
        console.log("getDerivedStateFromError");
        return {
            isError : true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info)
    }

    render() {
      if(this.state.isError){
        return <div>Something went wrong</div>
      }
      return this.props.children
  }
}

export default ErrorHandling