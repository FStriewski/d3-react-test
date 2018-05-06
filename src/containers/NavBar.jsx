import React, { Component } from 'react';

export default class NavBar extends Component {
    render(){
        return (

            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="/favicon.ico" width="30" height="30" className="d-inline-block align-top mr-3" alt=""/>
                <img src="/d3.jpeg" width="30" height="30" className="d-inline-block align-top mr-3" alt="" />
                    Chart Tests
        </a>
        </nav>

    )}
}