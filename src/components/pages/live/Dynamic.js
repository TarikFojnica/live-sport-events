// Tarik Fojnica

import React, { Component } from 'react';
import Stopwatch from '../../common/Stopwatch';
import liveIcon from '../../../assets/images/circle.svg';
import events from '../../../vendor/pub-sub';

const FIRST_NAMES =
	[
		'Tod',
		'Elisha',
		'Scotty',
		'Vicente',
		'Jon',
		'Otha',
		'Tuan',
		'Len',
		'Emil',
		'Jordan',
		'Fernando',
		'Javier',
		'Myron',
		'Ivory',
		'Son',
		'Joey',
		'Toby',
		'Mike',
		'Domingo',
		'Stevie'
	];

const LAST_NAMES = [
	'Astorga',
	'Fazio',
	'Gonsalves',
	'Rebuck',
	'Friday',
	'Frederickson',
	'Canup',
	'Primavera',
	'Ressler',
	'Albright',
	'Verdin',
	'Boyce',
	'Peltz',
	'Clemons',
	'Kamerer',
	'Clouse',
	'Mehaffey',
	'Savedra',
];

const TIMES = [
	60,
	59,
	58,
	57,
	56,
	55,
	54,
	53,
	52,
	51,
	50,
	60,
	60,
	59,
	58,
	57,
	56,
	55,
	54,
	53,
	52,
	51,
];

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

class Dynamic extends Component  {
	state = {
		firstNames: [],
		lastNames: [],
		times: [],
		activePlayerFirstName: '--',
		activePlayerLastName: '--',
		counter: -1,
		activeTime: 0
	};

	updateLivePlayer(index) {
		this.setState({
			activePlayerFirstName: this.state.firstNames[index],
			activePlayerLastName:  this.state.lastNames[index],
			firstGate: this.state.times[index] / 2 - 10,
			secondGate: this.state.times[index] / 2,
			thirdGate: this.state.times[index] / 2 + 7 ,
			fourthGate: this.state.times[index] / 2 + 12,
			fifthGate: this.state.times[index],
			activeTime: this.state.times[index]
		});
		console.log('for')
	}

	componentDidMount() {
		this.setState({
			firstNames: shuffleArray(FIRST_NAMES),
			lastNames: 	shuffleArray(LAST_NAMES),
			times: shuffleArray(TIMES),
			activeTime: this.state.times[0]
		});

		setTimeout(() => {
			this.updateLivePlayer(0)
		}, 500);


		let counter = 0;
		setInterval(() => {
			events.publish('NEW_PLAYER_STARTED', {});
			counter ++;
			this.updateLivePlayer(counter)
		}, 5000);
	}

	render() {
		return (
			<div className="dynamic-element">
				<span className="live-note"><img src={liveIcon} alt="Live Icon"/> Live Event</span>
				<div className="row">
					<div className="col-md-8">
						<div className="current-player">
							<h4>{`${this.state.activePlayerFirstName} ${this.state.activePlayerLastName}`}</h4>
						</div>

						<div className="timeline">
							<div className="gate gate-1 finished"><div className="inner"></div><span className="time">00:00:{this.state.firstGate}</span></div>
							<div className="gate gate-2 finished"><div className="inner"></div><span className="time">00:00:{this.state.secondGate}</span></div>
							<div className="gate gate-3 active"><div className="inner"></div><span className="time">00:00:{this.state.thirdGate}</span></div>
							<div className="gate gate-4 waiting"><div className="inner"></div><span className="time">00:00:{this.state.fourthGate}</span></div>
							<div className="gate gate-5 waiting"><div className="inner"></div><span className="time">00:00:{this.state.fifthGate}</span></div>
						</div>
					</div>

					<div className="col-md-4">
						<Stopwatch/>
					</div>
				</div>
			</div>
		);
	}
}

export default Dynamic;