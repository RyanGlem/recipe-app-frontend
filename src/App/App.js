import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import Nav from '../components/AllPlayers/views/nav';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Nav/>
          <RoutesContainer />
      </div>
    );
  }
}

export default App;
