import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorldMap from './charts/WorldMap'
import BarChartContainer from './containers/BarChartContainer'
import NavBar from './containers/NavBar'
import SideBar from './containers/SideBar'


class App extends Component {
  render() {
    return (
      <div className="App container-fluid pl-0 mr-0">
        <NavBar/>
        <div className="row">
        <div className="col-2">
            <SideBar />
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
