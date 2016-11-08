import React, { Component } from 'react';
import './App.css';
import ScheduledItems from './containers/ScheduledItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Canopy</h1>

        <div>
          <h2>Job Completed</h2>
          <p>Your Full Service Deluxe visit at 1234 Main Street has been completed on Monday, November 7th, 2016.</p>
        </div>

        <ScheduledItems />

        <div>Technician Component</div>

        <div>photo component</div>

        <div>comment component</div>
      </div>
    );
  }
}

export default App;
