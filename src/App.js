import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldMap from './charts/WorldMap'
import BarChartContainer from './containers/BarChartContainer'
import NavBar from './containers/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App container">
      <NavBar/>
        <div className="row">
          <div className="col-6">
        <BarChartContainer/>
        </div>
        </div>

        {/* <WorldMap/> */}
      </div>
    );
  }
}

export default App;
