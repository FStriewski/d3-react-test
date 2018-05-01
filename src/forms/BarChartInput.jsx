import React, { Component } from 'react';

export default class BarChartInput extends Component {

state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="number1"></label>
                    <input name="number1" id="number1" value={
                        this.state.number1
                    } onChange={this.handleChange} />

                    <label htmlFor="number2"></label>
                    <input name="number2" id="number2" value={
                        this.state.number2
                    } onChange={this.handleChange} />

                    <label htmlFor="number3"></label>
                    <input name="number3" id="number3" value={
                        this.state.number3
                    } onChange={this.handleChange} />

                    <label htmlFor="number4"></label>
                    <input name="number4" id="number4" value={
                        this.state.number4
                    } onChange={this.handleChange} />

                    <label htmlFor="number5"></label>
                    <input name="number5" id="number5" value={
                        this.state.number5
                    } onChange={this.handleChange} />
                </div>
                <button type="submit">Show</button>
            </form>
        )
    }
}