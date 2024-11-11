import React from "react";
import MyContext from "./MyContext";
class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <MyContext.Consumer>
          {(value) => (
            <div>
              <div> {value} </div>
              <>
                {this.props.sampleData.map((i, id) => {
                  return (
                    <React.Fragment key={id}>
                      <div className="fragment-body">
                        <h1>{i.id}</h1>
                        <h1>{i.name}</h1>
                      </div>
                    </React.Fragment>
                  );
                })}
              </>
            </div>
          )}
        </MyContext.Consumer>
        <>{this.context}</>
      </>
    );
  }
}

MyClassComponent.contextType = MyContext;
export default MyClassComponent;
