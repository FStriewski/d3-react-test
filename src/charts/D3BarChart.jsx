import React, { Component } from 'react'
import { scaleLinear, max, select } from 'd3'


class D3BarChart extends Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe6622')
            .attr('x', (d, i) => i * 25)
            .attr('y', d => this.props.size[1]- yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
            .attr("style", "outline: thin solid blue;")  

    }
    render() {
        return (
            <div id="barChart">
                        <h3>Simple BarChart </h3>
                        <svg ref={node => this.node = node}
                        width={500} height={500}>
                    </svg>
            </div>
        )
    }
}
export default D3BarChart