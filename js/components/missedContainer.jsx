import React, { Component } from 'react';

// Import components
import MissedLettersContainer from './missedLettersContainer.jsx';

export default class MissedContainer extends Component {

    render() {
        return (
            <div>
                <h1>You missed:</h1>
                <MissedLettersContainer/>
            </div>
        );
    }

}