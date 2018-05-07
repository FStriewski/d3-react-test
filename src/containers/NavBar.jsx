import React, { Component } from 'react';
import './Bars.css'

export default class NavBar extends Component {
    render(){
        return (

            <nav className="navbar navbar-light" id="navbar">
            <a className="navbar-brand" href="#">
                <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top mr-3" alt=""/>
                <img src="/d3.jpeg" width="30" height="30" className="d-inline-block align-top mr-3" alt="" />
                    Chart Tests
        </a>
        </nav>

    )}
}