import React, { Component } from 'react';
import D3BarChart from '../charts/D3BarChart'
import BarChartInput from '../forms/BarChartInput'
import {drawChart, resetChart} from '../actions/barInput'
import {connect} from 'react-redux'
import './Containers.css'

class BarChartContainer extends Component {
    handleInput = (input) => {
        this.props.drawChart(input)
    }

    handleReset = () => {
        this.props.resetChart()
    }

    render() {

        const barChartData = this.props.barData
        const data = []
        for (let i in barChartData) {
            data.push(barChartData[i]);
        }
        console.log(data)

        return (
            <div className="barChartContainer ">
                <h4>Simple BarChart </h4>
                <br/>
                <D3BarChart data={data} size={[300, 300]} />
                <BarChartInput onSubmit={this.handleInput} onReset={this.handleReset} />
                <button className="btn btn-sm btn-outline-danger" type="reset" onClick={this.handleReset}>Reset</button>
                {/* <WorldMap/> */}
            </div>
        );
    }
}

 const mapStateToProps = function (state,props) {
     return { 
         barData: state.barChart 
        }
 }


export default connect(mapStateToProps, {drawChart, resetChart} ) (BarChartContainer);