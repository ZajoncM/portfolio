import React, { Component } from "react";
import Navigation from "./pages/Navigation";
import Page from "./pages/Page";
import "./sass/Main.scss";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <nav className="Navigation">
          <Navigation />
        </nav>
        <main className="main">
          <Page />
        </main>
      </div>
    );
  }
}

export default App;
