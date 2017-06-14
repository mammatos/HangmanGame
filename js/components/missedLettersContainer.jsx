import React, { Component } from 'react';

// Import components
import MissedLetter from './missedLetter.jsx';


export default class MissedLettersContainer extends Component {
    render() {
        console.log('this.props.missedLetters innner:', this.props.missedLetters);
        const missedArr = this.props.missedLetters;
        
        return (
            <div className="missedLettersContainer">
                {missedArr.map((l, index) => {
                    return <MissedLetter 
                                letter={l}
                                key={index}
                            />
                })}

            </div>
        );
    }
}