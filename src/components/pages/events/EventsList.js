// Tarik Fojnica

import React, { Component } from 'react';
import EventsListElement from './EventsListElement';
import moment from 'moment'

import axios from 'axios';
const server = 'http://localhost:58524/api/';

class EventsList extends React.Component {

	state = {
		data: []
	};

	componentDidMount() {
		let date2 = moment('2017-05-22T00:00:00');
		console.log(date2.format("dddd, MMMM Do YYYY, h:mm"));

		let _this = this;
		axios.get(server + 'event')
			.then(function (response) {
				_this.setState({
					data: response.data
				})
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		let dates = [];
		let  allItems = this.state.data.map((result, id) => {

			dates[id] = moment(result.date);
			return (
				<EventsListElement key={id} title={result.skiingType} place="Ne radi" date={dates[id].format("dddd, MMMM Do YYYY")} time={result.startTime}/>
			)
		});

		return (
			<div className="page events-list">
				<div className="row">
					{allItems}
				</div>
			</div>
		);
	}
}

export default EventsList;