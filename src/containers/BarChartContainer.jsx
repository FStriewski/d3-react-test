import React, { Component } from 'react';
import D3BarChart from '../charts/D3BarChart'
import BarChartInput from '../forms/BarChartInput'
import {drawChart} from '../actions/barInput'
import {connect} from 'react-redux'

class BarChartContainer extends Component {
    handleInput = (input) => {
        this.props.drawChart(input)
    }

    render() {
        return (
            <div className="App container">
                <h3>Simple BarChart </h3>
                <div className="row">
                    <div className="col">
                            <BarChartInput onSubmit={this.handleInput} />
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

 const mapStateToProps = function (state,props) {
     return { 
         barDate: state.barChart 
        }
 }


export default connect(mapStateToProps, {drawChart} ) (BarChartContainer);