import React, { Component } from 'react';

// Import components
import Letter from './letter.jsx';

const maxLength = 11;

export default class WordContainer extends Component {

    render() {
        const arr = this.props.word.split("");
        console.log("moja nowa tablica", arr);
        const emptyArrLength = maxLength - arr.length;
        console.log("ilość pustych znakow", emptyArrLength);

        const newArr = new Array(emptyArrLength).fill(" ");
        console.log("tablica z pustymi znakami", newArr)

        const wordRow = newArr.concat(arr);
        console.log("połączone tablice", wordRow)

        return (
            <div className="wordContainer">
                {wordRow.map((letter, index) => {
                    console.log("to jest letter", letter);
                    console.log("to jest this.props.rightLetter", this.props.rightLetters);
                    return <Letter 
                                key={index} 
                                letter={letter}
                                className={this.props.rightLetters.includes(letter) ? 'visible' : ''}
                            />
                })}
            </div>
        );
    }

}