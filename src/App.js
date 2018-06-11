import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubePlayer from './YoutubePlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <YoutubePlayer />
      </div>
    );
  }
}

export default App;
