import React, { Component } from 'react';

export default class Hand extends Component {

    render() {
        return <div className={`hand ${this.props.className}`}/>
    }

}