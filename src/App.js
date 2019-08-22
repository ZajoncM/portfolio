import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <MDBBtn color="primary">Primary</MDBBtn>
        <MDBBtn color="secondary">Secondary</MDBBtn>
      </div>
    );
  }
}

export default App;
