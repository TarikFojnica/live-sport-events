// Tarik Fojnica

import React, { Component } from 'react';
import Countdown from 'react-count-down';
import sandClock from '../../assets/images/sand-clock.svg';
import GoogleMapReact from 'google-map-react';

const cb = () => {
	console.log('The event is in progress')
};

const OPTIONS = { endDate: '03/01/2018', prefix: '', cb};

class CountDown extends React.Component {

	render() {
		const cb = () => {
			console.log('expired callback')
		}

		const OPTIONS = { endDate: '05/25/2017', prefix: '', cb};

		return (
			<div className="module count-down with-transparent-background">
				<img src={sandClock} alt="Count Down"/>
				<div className="values">
					<Countdown options={OPTIONS}/>
				</div>

			</div>
		);
	}
}

export default CountDown;