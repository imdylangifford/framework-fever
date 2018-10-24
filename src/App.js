import React, { Component } from "react";
import Header from "./Components/Header/Header";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="imgcontainer">
          <div className="centeredtxt">
            <p>Find the best resources for javascripts most used frameworks</p>
            <div className="list">
              <p>React</p>
              <p>Vue</p>
              <p>Angular</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
