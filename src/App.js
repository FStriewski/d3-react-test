import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldMap from './charts/WorldMap'
import BarChartContainer from './containers/BarChartContainer'
import NavBar from './containers/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App ">
      <NavBar/>
          <div className="col-6">
        <BarChartContainer/>
        </div>

        {/* <WorldMap/> */}
      </div>
    );
  }
}

export default App;
