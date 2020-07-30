import React, { Component } from "react";
import { render } from "react-dom";
import Main from "./Main";
import "../../static/index.css"
class App extends Component {
  

  render() {
    return (
    <Main/>
        /*
   
      */
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);