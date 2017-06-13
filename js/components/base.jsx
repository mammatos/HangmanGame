import React, { Component } from 'react';

// Import components
import CharacterContainer from './characterContainer.jsx';
import MissedContainer from './missedContainer.jsx';
import WordContainer from './wordContainer.jsx';
import Figure from './figure.jsx';

export default class Base extends Component {

    render() {
        return (
            <div className="base">
                <CharacterContainer/>
                <MissedContainer/>
                <WordContainer/>
                <Figure/>
            </div>
        );
    }

}