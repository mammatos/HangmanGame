import React, { Component } from 'react';

// Import components
import MissedLettersContainer from './missedLettersContainer.jsx';

export default class MissedContainer extends Component {

    render() {
        return (
            <div className="missedContainer">
                <h1 className="missedHeader">You missed:</h1>
                <MissedLettersContainer missedLetters={this.props.missedLetters}/>
            </div>
        );
    }

}