import React, { Component } from 'react';
import './App.css';
import Comments from './containers/Comments';
import Header from './components/Header';
import ScheduledItems from './containers/ScheduledItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-aligned">

          <div>
            <h2>Job Completed</h2>
            <p>Your Full Service Deluxe visit at 1234 Main Street has been completed on Monday, November 7th, 2016.</p>
          </div>

          <ScheduledItems />

          <div>Technician Component</div>

          <div>photo component</div>

          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
