import React, { Component } from 'react';
import './App.css';
import Comments from './containers/Comments';
import Header from './components/Header';
import JobInfo from './components/JobInfo';
import ScheduledItems from './containers/ScheduledItems';
import Technician from './components/Technician';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content content-aligned">
          <JobInfo />

          <ScheduledItems />

          <Technician />

          <div>
            <h3>Photos</h3>
            <p>
              blah blah blah
            </p>
          </div>

          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
