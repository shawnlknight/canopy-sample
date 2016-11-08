import React, { Component } from 'react';
import './App.css';
import Comments from './containers/Comments';
import Header from './components/Header';
import JobInfo from './components/JobInfo';
import ScheduledItems from './containers/ScheduledItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-content content-aligned">
          <JobInfo />

          <ScheduledItems />

          <div>
            <h3>Technician</h3>
            <p>
              blah blah blah
            </p>
          </div>

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
