import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import D3BarChart from './charts/D3BarChart'
import WorldMap from './charts/WorldMap'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <D3BarChart data={[5, 8, 1, 3]} size={[300, 300]}/> */}
        <WorldMap/>
      </div>
    );
  }
}

export default App;
