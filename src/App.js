import React, { Component } from 'react';
import './App.css';
import Comments from './containers/Comments';
import Footer from './components/Footer';
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
          <JobInfo className="section" />
          <div className="flex-grid-thirds">
            <ScheduledItems className="section bg-color-lightgray card col" />
            <Technician className="section bg-color-lightgray card col" />
            <Photos className="section bg-color-lightgray card col" />
          </div>
        </div>
        <Comments className="section bg-color-lightgray section-secondary" />
        <Footer />
      </div>
    );
  }
}

export default App;
