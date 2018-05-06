import React, { Component } from 'react'
import { scaleLinear, max, select } from 'd3'


class D3BarChart extends Component {
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        // node sets the ref property of the svg used for placement
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
        // Domain is the complete set of input values:
            .domain([0, dataMax])
        // Takes size props for scaling
            .range([0, this.props.size[1]])

            // Data join - handles the "state" of data vs. elements:
            // Enter - leftover unbound data
            // Update - data joined to existing elements
            // Exit - leftover unbound elements (to be removed), e.g because less data then before after update.

        // Empty virtual selection, then joined elements. Enter selection is appended. 
   select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect') // append rect to enter selection. Could also be a DOM el as e.g. p
//console.log(node)
        // Target exit selection and remove leftover elements.
        select(node)    
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

      
        // Style and set SVG attributes:
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe6622')   //orange fill
            .style('stroke', 'black') //black border
            .attr('x', (d, i) => i * 35)  // x pos
            .attr('width', 30) // width of bars
            .attr('y', d => this.props.size[1]- yScale(d))
            .attr('height', d => yScale(d))
            .text("x")
            // .attr("style", "outline: thin solid blue;") 
            // .append("text")
            // .attr("dy", "-.35em")
            // .attr("opacity", "0")
            // .text(function (d) { return d; });

// let text = select(node).selectAll("rect")
//             .data(this.props.data)
//             .enter()
//             .append("text")

//         let textLabels = text
//         .attr("x", function (d) { return d.x; })
//         .attr("y", function (d) { return d.y; })
//         .text(function (d) { return "( " + d.x + ", " + d.y + " )"; })
//         .attr("font-family", "sans-serif")
//         .attr("font-size", "20px")
//         .attr("fill", "red");

        // console.log(textLabels)
    }
    render() {
        return (
            <div id="barChart">
                       
                        <svg ref={node => this.node = node}
                        width={300} height={300}>
                    </svg>
            </div>
        )
    }
}
export default D3BarChart