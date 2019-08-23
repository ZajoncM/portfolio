import React, { Component } from "react";
import Navigation from "./pages/Navigation";
import Page from "./pages/Page";
import "./sass/Main.scss";

class App extends Component {
  state = {};

  handleScroll = () => {
    console.log("działa");
    window.scrollBy(0, window.innerHeight);
  };

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
