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
                <Arm className="arm-right"/>
                <Arm className="arm-left"/>
                <Hand className="hand-right"/>
                <Hand className="hand-left"/>
                <Leg className="leg-right"/>
                <Leg className="leg-left"/>
                <Foot className="foot-right"/>
                <Foot className="foot-left"/>
            </div>
        );
    }

}