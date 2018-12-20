import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importing components
import { Navbar, Dashboard } from "../components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dashboard}></Route>
          </Switch>
        </div></BrowserRouter>
    );
  }
}

export default App;
