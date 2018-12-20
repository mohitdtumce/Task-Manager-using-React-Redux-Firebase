import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importing components
import { Navbar, Dashboard, SignIn, SignUp, CreateTask, TaskDetails } from "../components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/task/:id" component={TaskDetails} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/create" component={CreateTask} />
          </Switch>
        </div></BrowserRouter>
    );
  }
}

export default App;
