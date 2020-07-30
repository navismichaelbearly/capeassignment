import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import Authors from "./Authors";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <div className="sidenav">
            <ul>
              <li><NavLink to="/home">Home</NavLink></li>
              <li><NavLink to="/authors">Authors</NavLink></li>
              <li><NavLink to="/books">Books</NavLink></li>
            </ul>
          </div>
          <div className="main">
          <h1>CapeStart</h1>
            <Route path="/home" component={Home}/>
            <Route path="/authors" component={Authors}/>
            <Route path="/books" component={Books}/>
            
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;