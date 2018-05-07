import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldMap from './charts/WorldMap'
import BarChartContainer from './containers/BarChartContainer'
import NavBar from './containers/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App container-fluid pl-0 pr-0">
        <NavBar/>
        <div className="row">
        <div className="col-6">
        1233
        </div>
          <div className="col-6">
        <BarChartContainer/>
        </div>
        {/* <WorldMap/> */}
        <div id="footer">C</div>
      </div>
      </div>
    );
  }
}

export default App;
