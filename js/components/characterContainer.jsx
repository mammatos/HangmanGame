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
            <div>
                <img src="assets/img/bar.png"/>
                <img src="assets/img/head.png"/>
                <Neck/>
                <img src="assets/img/corpus.png"/>
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