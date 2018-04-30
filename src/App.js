import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import D3BarChart from './charts/D3BarChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <D3BarChart />
      </div>
    );
  }
}

export default App;
