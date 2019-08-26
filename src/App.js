import React, { Component } from "react";
import Navigation from "./pages/Navigation";
import Page from "./pages/Page";
import "./sass/Main.scss";

class App extends Component {
  state = {
    about: false,
    skill: false,
    contact: false
  };
  scrollActivate = () => {
    const currentHeight = Math.floor(window.scrollY);
    const aboutHeight = document.getElementById("about").offsetTop;
    const skillHeight = document.getElementById("skill").offsetTop;
    const contactHeight = document.getElementById("contact").offsetTop;
    if (currentHeight > aboutHeight - window.innerHeight / 2) {
      this.setState({
        about: true
      });
    }
    if (currentHeight > skillHeight - window.innerHeight / 2) {
      this.setState({
        skill: true
      });
    }
    if (currentHeight > contactHeight - window.innerHeight / 1.5) {
      this.setState({
        contact: true
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", () => this.scrollActivate());
  }
  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <nav className="Navigation">
          <Navigation />
        </nav>
        <main className="main">
          <Page pages={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
