import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from "./components/Menu";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;