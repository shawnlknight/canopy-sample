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

          <div>Technician Component</div>

          <div>photo component</div>

          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
