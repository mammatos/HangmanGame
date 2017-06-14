import React, { Component } from 'react';

// Import components
import Letter from './letter.jsx';

export default class WordContainer extends Component {

    render() {
        const arr = this.props.word.split("");
        console.log("moja nowa tablica", arr);

        return (
            <div className="wordContainer">
                <p>{this.props.word}</p>
                {arr.map((letter, index) => {
                    return <Letter 
                                key={index} 
                                letter={letter}
                            />
                })}
            </div>
        );
    }

}