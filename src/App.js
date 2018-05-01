import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldMap from './charts/WorldMap'
import BarChartContainer from './containers/BarChartContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChartContainer/>

        {/* <WorldMap/> */}
      </div>
    );
  }
}

export default App;
