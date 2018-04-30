import React, { Component } from 'react';
import * as d3 from "d3";

export default class D3BarChart extends Component {

    render(){

        let data = [4, 8, 15, 16, 23, 42];

        const output = d3.select("#chartd3")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) {
                return d * 10 + "px";
            })
            .text(function (d) { return d; });



        return (
            <div id="chartd3"> Test
            
            
            </div>
        )
    }


}