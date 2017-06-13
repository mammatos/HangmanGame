import React, { Component } from 'react';

// Import components
import MissedLettersContainer from './missedLettersContainer.jsx';

export default class MissedContainer extends Component {

    render() {
        return (
            <div className="missedContainer">
                <h1>You missed:</h1>
                <MissedLettersContainer/>
            </div>
        );
    }

}