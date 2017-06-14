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
            rightLetters: [],
            missedLetters: []
        }
        this.runApi();
    }

    render() {
        console.log('render - this.state.missedLetters: ', this.state.missedLetters);
        return (
            <div className="base">
                <CharacterContainer missedCount={this.state.missedLetters.length}/>
                <MissedContainer missedLetters={this.state.missedLetters}/>
                <WordContainer word={this.state.word} rightLetters={this.state.rightLetters}/>
                <Figure/>
                <Overlay/>
            </div>
        );
    }

    runApi() {
        $.ajax({
            url: urlApi,
            method: 'GET'
        })
        .done((response) => {
            if(response.word.includes("-")) {
                this.runApi();
            } else {
                console.log(response);
                this.setState({
                    word: response.word
                })
            }
        })
        .error((error) => {
            console.log(error, "error");
        });
    }

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            console.log(event.key);
            if(regEx.test(event.key) && event.key.length === 1) {
                if(this.state.word.includes(event.key) && !this.state.rightLetters.includes(event.key) && this.state.rightLetters.length < this.state.word.length && this.state.missedLetters.length < 11) {
                    const newState = this.state.rightLetters.concat(event.key);
                    console.log('new state:', newState);
                    this.setState({
                        rightLetters: newState
                    });
                } else if (!this.state.missedLetters.includes(event.key) && this.state.missedLetters.length < 11 && this.state.rightLetters.length < this.state.word.length && !this.state.rightLetters.includes(event.key)){
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


}