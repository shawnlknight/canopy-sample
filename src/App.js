import React, { Component } from 'react';
import './App.css';
import Comments from './containers/Comments';
import Header from './components/Header';
import JobInfo from './components/JobInfo';
import Photos from './components/Photos';
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
          <Photos />
          <Comments />
        </div>
      </div>
    );
  }
}

export default App;
