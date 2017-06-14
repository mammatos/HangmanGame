import React, { Component } from 'react';

export default class MissedLetter extends Component {

    render() {
        return (
            <div>
                <p className="missedLetter">{this.props.letter}</p>
            </div>
        );
    }
}