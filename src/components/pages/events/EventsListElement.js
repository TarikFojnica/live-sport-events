// Tarik Fojnica

import React, { Component } from 'react';
import {Link} from 'react-router';
import LinkSymbol from '../../../assets/images/link-symbol.svg';
import place from '../../../assets/images/placeholder-on-map-paper-in-perspective.svg';
import clock from '../../../assets/images/clock.svg'
import calendar from '../../../assets/images/calendar.svg'

class EventsListElement extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="events-list-element">
					<h2>Alpine Skiing</h2>
					<p className="place"><img src={place} alt=""/>Bjelasnica</p>
					<p className="time"><img src={calendar} alt=""/>22.12.2017</p>
					<p className="time"><img src={clock} alt=""/>13:00</p>
					<Link className="btn" to="/events/1"><img src={LinkSymbol} alt="Link Symbol"/> Details</Link>
				</div>
			</div>
		);
	}
}

export default EventsListElement;