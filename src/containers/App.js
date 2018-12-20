import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

// Importing components
import { Navbar } from "../components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div></BrowserRouter>
    );
  }
}

export default App;
