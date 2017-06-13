import React, { Component } from 'react';

// Import components
import Letter from './letter.jsx';

export default class WordContainer extends Component {

    render() {
        return (
            <div className="wordContainer">
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
                <Letter/>
            </div>
        );
    }

}