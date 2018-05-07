import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import WorldMap from '../charts/WorldMap'
import LineChart from '../charts/D3LineChart'
import BarChartContainer from './BarChartContainer'

import './Bars.css'

export default class SideBar extends Component {

render(){
    return (
        <div id="sidebar">
            <div>
                <Link to={'/barchart'} component={BarChartContainer}>Bar Chart</Link>
            </div>

            <div>
                <Link to={'/linechart'} component={LineChart}>Line Chart</Link>
            </div>
        
            <div>
                <Link to={'/worldmap'} component={WorldMap}>World Map</Link> 
            </div>
        </div>
    )
}

}