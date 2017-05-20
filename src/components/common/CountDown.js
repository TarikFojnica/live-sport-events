// Tarik Fojnica

import React, { Component } from 'react';
import Countdown from 'react-count-down'
import sandClock from '../../assets/images/sand-clock.svg'

class CountDown extends React.Component {


	render() {
		const cb = () => {
			console.log('expired callback')
		}

		const OPTIONS = { endDate: '05/20/2017 10:55 AM', prefix: '', cb};

		return (
			<div className="module count-down with-transparent-background">
				<img src={sandClock} alt="Count Down"/>
				<br/>
				<div className="values">
					<span className="item days no-right-border">25 <small>days</small></span>
					<span className="item hours no-right-border">15 <small>hours</small></span>
					<span className="item seconds">59 <small>seconds</small></span>
				</div>
			</div>
		);
	}
}

export default CountDown;