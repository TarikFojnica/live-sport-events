// Tarik Fojnica

import React, { Component } from 'react';
import Intro from './Intro';
import CountDown from '../../common/CountDown';
import Table from './Table';
import axios from 'axios';
import moment from 'moment';
import GoogleMap from '../../common/GoogleMap';
const server = 'http://localhost:58524/api/event/';
const mapServer = 'http://localhost:58524/api/place/';
import GoogleMapReact from 'google-map-react';

class Event extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/events/', ''),
		date: '',
		fullData: [],
		data: [],
		mapData: {
			lat: 0,
			lng: 0
		}
	};

	componentDidMount() {
		let _this = this;
		axios.get(server + this.state.id)
			.then(function (response) {
				let initialDate = moment(response.data[0].date);
				let preparedDate = initialDate.format("dddd, MMMM Do YYYY");
				let preparedDateCountDown =  initialDate.format("MM/DD/YYYY");

				_this.setState({
					fullData: response.data,
					data: response.data[0],
					countDownDate: preparedDateCountDown,
					date: preparedDate
				});

			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get('http://localhost:58524/api/place/' +  this.state.id)
			.then(function (response) {

				_this.setState({
					mapData: {
						lat: response.data.latitude,
						lng: response.data.longitude
					}
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
						<CountDown date={this.state.countDownDate}/>
						<div style={{width: '100%', height: '240px', marginTop: '20px'}}>
							<GoogleMap id={this.state.id} />
						</div>
					</div>
				</div>

				<Table data={this.state.fullData}/>
			</div>
		);
	}
}

export default Event;