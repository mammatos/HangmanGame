import React, { Component } from 'react';

// Import components
import Neck from './neck.jsx';
import Arm from './arm.jsx';
import Hand from './hand.jsx';
import Leg from './leg.jsx';
import Foot from './foot.jsx';

export default class CharacterContainer extends Component {

    render() {
        const n = this.props.missedCount;

        return (
            <div className="characterContainer">
                <img src="assets/img/bar.png" className="bar"/>
                {n >= 1 ? <img src="assets/img/head.png" className="head"/> : null}
                {n >= 2 ? <Neck/> : null}
                {n >= 3 ? <img src="assets/img/corpus.png" className="corpus"/> : null}
                {n >= 4 ? <Arm className="arm-right"/> : null}
                {n >= 5 ? <Arm className="arm-left"/> : null}
                {n >= 6 ? <Hand className="hand-right"/> : null}
                {n >= 7 ? <Hand className="hand-left"/> : null}
                {n >= 8 ? <Leg className="leg-right"/> : null}
                {n >= 9 ? <Leg className="leg-left"/> : null}
                {n >= 10 ? <Foot className="foot-right"/> : null}
                {n >= 11 ? <Foot className="foot-left"/> : null}
            </div>
        );
    }

}