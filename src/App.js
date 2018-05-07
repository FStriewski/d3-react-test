import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import WorldMap from './charts/WorldMap'
import BarChartContainer from './containers/BarChartContainer'
import NavBar from './containers/NavBar'
import SideBar from './containers/SideBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid pl-0 mr-0">
          <NavBar/>
          <div className="row">

            <div className="col-2">
              <SideBar />
            </div>

            <div className="col-1">
            </div>

            <div className="col-8">
              <Route exact path="/" render={() => <Redirect to="/barchart" />} /> 
              <Route exact path="/barchart" component={BarChartContainer} />
              <Route exact path="/worldmap" component={WorldMap} />
            </div>

            <div className="col-1">
            </div>

            <div id="footer">C</div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
