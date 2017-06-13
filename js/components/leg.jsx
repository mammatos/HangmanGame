import React, { Component } from 'react';

export default class Leg extends Component {

    render() {
        return <div className={`leg ${this.props.className}`}/>
    }

}