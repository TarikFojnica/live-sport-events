// Tarik Fojnica

import React, { Component } from 'react';
import Stopwatch from '../../common/Stopwatch';
import liveIcon from '../../../assets/images/circle.svg';

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
	57,
	56,
	55,
	54,
	53,
	52,
	51,
	50,
	49,
	48,
	47,
	46,
	45,
	44,
	43,
	42,
	41,
	40
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
		activePlayer: {}
	};

	componentDidMount() {
		this.setState({
			firstNames: shuffleArray(FIRST_NAMES),
			lastNames: 	shuffleArray(LAST_NAMES),
			times: shuffleArray(TIMES),
		});
	}

	render() {
		let counter = -1;
		setTimeout(() => {
			counter++;

			this.setState({
				activePlayer: this.state.firstNames[counter] + this.state.lastNames[counter],
				firstGate: this.state.times[counter] - 50,
				secondGate: this.state.times[counter] - 40,
				thirdGate: this.state.times[counter] - 28,
				fourthGate: this.state.times[counter] - 18,
				fifthGate: this.state.times[counter]
			});

			return(
				<div>

				</div>
			)


		}, this.state.times[counter]);

		return (
			<div className="dynamic-element">
				<span className="live-note"><img src={liveIcon} alt="Live Icon"/> Live Event</span>
				<div className="row">
					<div className="col-md-8">
						<div className="current-player">
							<h4>{this.state.firstNames[0]} {this.state.lastNames[0]}</h4>
						</div>

						<div className="timeline">
							<div className="timeline">
								<div className="gate gate-1 finished"><div className="inner"></div><span className="time">00:00:59</span></div>
								<div className="gate gate-2 finished"><div className="inner"></div><span className="time">00:00:23</span></div>
								<div className="gate gate-3 active"><div className="inner"></div></div>
								<div className="gate gate-4 waiting"><div className="inner"></div></div>
								<div className="gate gate-5 waiting"><div className="inner"></div></div>
							</div>
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