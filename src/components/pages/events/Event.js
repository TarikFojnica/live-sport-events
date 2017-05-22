// Tarik Fojnica

import React, { Component } from 'react';
import Intro from './Intro';
import CountDown from '../../common/CountDown';
import Table from './Table';
import axios from 'axios';
import moment from 'moment';
import GoogleMap from '../../common/GoogleMap';
const server = 'http://localhost:58524/api/event/';

class Event extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/events/', ''),
		date: '',
		fullData: [],
		data: []
	};

	componentDidMount() {
		console.log(this.state.id);
		let _this = this;
		axios.get(server + this.state.id)
			.then(function (response) {
				console.log(response);
				let initialDate = moment(response.data[0].date);
				let preparedDate =initialDate.format("dddd, MMMM Do YYYY");


				_this.setState({
					fullData: response.data,
					data: response.data[0],
					date: preparedDate
				});

			})
			.catch(function (error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="page events">
				<div className="row">
					<div className="col-md-6">
						<Intro title={this.state.data.skiingType} place={this.state.data.nameplace} date={this.state.date} time={this.state.data.startTime} numOfPlayers={this.state.data.numberOfPlayers} trackLength={this.state.data.lenghtOfTrack}/>
					</div>

					<div className="col-md-6">
						<CountDown/>
						<div style={{width: '100%', height: '240px', marginTop: '20px'}}>
							<GoogleMap />
						</div>,
					</div>
				</div>

				<Table data={this.state.data}/>
			</div>
		);
	}
}

export default Event;