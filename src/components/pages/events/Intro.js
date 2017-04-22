import React, { Component } from 'react';
import slalom from '../../../assets/images/slalom.svg';
import place from '../../../assets/images/placeholder-on-map-paper-in-perspective.svg';
import clock from '../../../assets/images/clock.svg'
import calendar from '../../../assets/images/calendar.svg'

class Intro extends Component  {
	render() {
		return (
			<div className="intro with-transparent-background">
				<h1><img src={slalom} alt="Type"/> Slalom</h1>
				<ul>
					<li><img className="icon" src={calendar} alt=""/>Date: <span>15.7.2017</span></li>
					<li><img className="icon" src={clock} alt=""/>Time: <span>17:00</span></li>
					<li><img className="icon" src={place} alt=""/>Place: <span>Bjelasnica, Lipsum 223</span></li>
				</ul>
				<p className="desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat nulla sed diam tempor dapibus. Suspendisse vel magna sit amet odio tempus congue a non nibh
				</p>
			</div>

		);
	}
}

export default Intro;