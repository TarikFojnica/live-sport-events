import React, { Component } from 'react';
import Countdown from 'react-count-down'
import sandClock from '../../assets/images/sand-clock.svg'

class CountDown extends React.Component {


	render() {
		const cb = () => {
			console.log('expired callback')
		}

		const OPTIONS = { endDate: '05/20/2017 10:55 AM', prefix: '', cb}

		return (
			<div className="module count-down with-transparent-background">
				<img src={sandClock} alt="Count Down"/>
				<div className="clock">
					<Countdown options={OPTIONS} />
				</div>
			</div>
		);
	}
}

export default CountDown;