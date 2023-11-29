import React, { Component } from 'react'
import ChildClass from './ChildClass';
import Functional1 from '../Functional/functional1';
import Functional2 from '../Functional/Functional2';
import ErrorHandling from './ErrorHandling';


export class Class1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         display : true,
         data : {
            name : "Monika",
            address : "AP"
         }
      }
      console.log("Constructor");
      this.updatevalue = this.updatevalue.bind(this);
    }

    static getDerivedStateFromProps(){
      console.log("getDerivedStateFromProps");
      // console.log(this)
      // this.setState({count : this.state.count+1})
      return null;
    }

    updatevalue () {
        this.setState({count : this.state.count+1 , display : !this.state.display});
        console.log(this.state.count);

    }

    componentDidMount(){
      console.log("Did Mount")
    }

    shouldComponentUpdate(){
      console.log("ShouldComponentUpdate");
      return true;
    }

    getSnapshotBeforeUpdate(prevprops, prevstate){
      console.log("getSnapshotBeforeUpdate");
      return null;
    }

    componentDidUpdate(){
      console.log("componentDidUpdate");
    }

    render() {

      console.log("Render");
    return (
        <div>
      <h1>Parent Component</h1>
      <div>{this.props.name}</div>
      <div>{this.state.count}</div>
      <button onClick={this.updatevalue}>Click</button>
      {/* {(this.state.display) ?  */}
      {/* <ChildClass  
      count ={this.state.count}
      updatevalue ={this.updatevalue}/>  */}

      {/* : null} */}
      <br/>
      <ErrorHandling>
        <Functional2 name={"Mayur"}/>
      </ErrorHandling>
      <ErrorHandling>
        <Functional2 name={"Kavya"}/>
      </ErrorHandling>
      <ErrorHandling>
        <Functional2 name={"Monika"}/>
      </ErrorHandling>
      
      </div>
    )
  }
}

export default Class1