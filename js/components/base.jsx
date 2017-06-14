import React, { Component } from 'react';

// Import components
import CharacterContainer from './characterContainer.jsx';
import MissedContainer from './missedContainer.jsx';
import WordContainer from './wordContainer.jsx';
import Figure from './figure.jsx';
import Overlay from './overlay.jsx';

const urlApi = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&excludePartOfSpeech=noun-plural&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=11&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

const regEx = /[a-zA-Z]/;

export default class Base extends Component {

    constructor(props){
        super(props);
        this.state = {
            word: "",
            wordLenghtWithoutDuplicates: 0,
            rightLetters: [],
            missedLetters: []
        }
        this.runApi();
        this.newGame=this.newGame.bind(this);
    }

    render() {
        console.log('render - this.state.missedLetters: ', this.state.missedLetters);
        console.log('this.state.rightLetters.length: ', this.state.rightLetters.length);
        console.log('this.state.word.length: ', this.state.word.length);

        return (
            <div className="base">
                <CharacterContainer missedCount={this.state.missedLetters.length}/>
                <MissedContainer missedLetters={this.state.missedLetters}/>
                <WordContainer word={this.state.word} rightLetters={this.state.rightLetters}/>
                <Figure/>
                {(this.state.wordLenghtWithoutDuplicates > 0 && (this.state.missedLetters.length >= 11 || this.state.rightLetters.length >= this.state.wordLenghtWithoutDuplicates)) ? <Overlay newGame={this.newGame}/> : null}
            </div>
        );
    }

    newGame() {
        this.setState({
            word: "",
            rightLetters: [],
            missedLetters: []
        })
        this.runApi();
    }

    runApi() {
        fetch(urlApi).then((response) => {
            return response.json();
        }).then((responseData) => {
            if(responseData.word.includes("-")) {
                this.runApi();
            } else {
                console.log(responseData);
                const arrayWithoutDuplicates = this.removeDuplicates(responseData.word.split(""));
                this.setState({
                    word: responseData.word,
                    wordLenghtWithoutDuplicates: arrayWithoutDuplicates.length
                })
            }
        }).catch((error) => {
            console.log(error);
        });
        // $.get(urlApi, (response) => {
        //     if(response.word.includes("-")) {
        //         this.runApi();
        //     } else {
        //         console.log(response);
        //         const arrayWithoutDuplicates = this.removeDuplicates(response.word.split(""));
        //         this.setState({
        //             word: response.word,
        //             wordLenghtWithoutDuplicates: arrayWithoutDuplicates.length
        //         })
        //     }
        // });
    }

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            console.log(event.key);
            if(regEx.test(event.key) && event.key.length === 1 && this.state.word.length > 0) {
                if(this.state.word.includes(event.key) && !this.state.rightLetters.includes(event.key) && this.state.rightLetters.length < this.state.wordLenghtWithoutDuplicates && this.state.missedLetters.length < 11) {
                    const newState = this.state.rightLetters.concat(event.key);
                    console.log('new state:', newState);
                    this.setState({
                        rightLetters: newState
                    });
                } else if (!this.state.missedLetters.includes(event.key) && this.state.missedLetters.length < 11 && this.state.rightLetters.length < this.state.wordLenghtWithoutDuplicates && !this.state.rightLetters.includes(event.key)){
                    const newState = this.state.missedLetters.concat(event.key);
                    console.log('new state missed: ', newState);
                    this.setState({
                        missedLetters: newState
                    })
                }
            }
        });  
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', function(){
            console.log("keydowndziała");
        });  
    }

    removeDuplicates(arr) {
        return arr.filter((item, index) => {
            return arr.indexOf(item) === index;
        });
    }
}