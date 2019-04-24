import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
