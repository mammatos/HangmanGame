import React, { Component } from 'react';

// Import components
import MissedLetter from './missedLetter.jsx';


export default class MissedLettersContainer extends Component {

    render() {
        return (
            <div className="missedLettersContainer">
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
                <MissedLetter/>
            </div>
        );
    }

}