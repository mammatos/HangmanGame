import React, { Component } from 'react';

// Import components
import Neck from './neck.jsx';
import Arm from './arm.jsx';
import Hand from './hand.jsx';
import Leg from './leg.jsx';
import Foot from './foot.jsx';

export default class CharacterContainer extends Component {

    render() {
        return (
            <div className="characterContainer">
                <img src="assets/img/bar.png" className="bar"/>
                <img src="assets/img/head.png" className="head"/>
                <Neck/>
                <img src="assets/img/corpus.png" className="corpus"/>
                <Arm/>
                <Arm/>
                <Hand/>
                <Hand/>
                <Leg/>
                <Leg/>
                <Foot/>
                <Foot/>
            </div>
        );
    }

}