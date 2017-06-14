import React, { Component } from 'react';

export default class Overlay extends Component {

    render() {
        return (
            <div className="overlay">
                <h1 className="gameOverText">Game over</h1>
                <button className="restartText">new word</button>
            </div>
        )
    }
}