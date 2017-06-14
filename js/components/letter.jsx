import React, { Component } from 'react';

export default class Letter extends Component {

    render() {
        return (
            <div className={"box-letterCorrect" + (this.props.letter === " " ? ' empty' : '')}>
                <p className={"letterCorrect" + " " + this.props.className}>{this.props.letter}</p>
            </div>
        );
    }
}