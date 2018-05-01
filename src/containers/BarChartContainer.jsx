import React, { Component } from 'react';
import D3BarChart from '../charts/D3BarChart'
import BarChartInput from '../forms/BarChartInput'

class BarChartContainer extends Component {
    render() {
        return (
            <div className="App container">
                <h3>Simple BarChart </h3>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <BarChartInput />
                        </div>
                    </div>
                    <div className="col">
                        <D3BarChart data={[5, 8, 1, 3]} size={[300, 300]} />
                    </div>
                </div>
                {/* <WorldMap/> */}
            </div>
        );
    }
}

export default BarChartContainer;