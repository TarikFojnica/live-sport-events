// Tarik Fojnica

import React, { Component } from 'react';
import EventsListElement from './EventsListElement';

import axios from 'axios';
const server = 'http://localhost:58524/api/';

class EventsList extends React.Component {

	state = {
		title: '',
		place: '',
		time: '',
		clock: ''
	};

	componentDidMount() {
		axios.get(server + 'event')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="page events-list">
				<div className="row">
					<EventsListElement title="This is title" place="Place" time="Time" clock="12:00"/>
				</div>
			</div>
		);
	}
}

export default EventsList;