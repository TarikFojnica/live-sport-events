// Tarik Fojnica

import React, { Component } from 'react';
import Intro from './Intro';
import CountDown from '../../common/CountDown'
import Table from './Table'
import axios from 'axios';
import moment from 'moment'
import GoogleMapReact from 'google-map-react';
const server = 'http://localhost:58524/api/event/';

const AnyReactComponent = () => (
	<div>
	</div>
);

class SimpleMap extends React.Component {
	static defaultProps = {
		center: {lat: 43.7042, lng: 18.2567},
		zoom: 13
	};

	render() {
		return (
			<GoogleMapReact
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
			>
				<AnyReactComponent
					lat={59.955413}
					lng={30.337844}
				/>
			</GoogleMapReact>
		);
	}
}

class Event extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/events/', ''),
		date: '',
		data: []
	};

	componentDidMount() {
		let _this = this;
		axios.get(server + this.state.id)
			.then(function (response) {
				console.log(response);
				let initialDate = moment(response.data[0].date);
				let preparedDate =initialDate.format("dddd, MMMM Do YYYY");


				_this.setState({
					data: response.data[0],
					date: preparedDate
				});

			})
			.catch(function (error) {
				console.log(error);
			});
	};

	render() {
		console.log(this.state.data)
		return (
			<div className="page events">
				<div className="row">
					<div className="col-md-6">
						<Intro title={this.state.data.skiingType} place={this.state.data.nameplace} date={this.state.date} time={this.state.data.startTime} numOfPlayers={this.state.data.numberOfPlayers} trackLength={this.state.data.lenghtOfTrack}/>
					</div>

					<div className="col-md-6">
						<CountDown/>
						<div style={{width: '100%', height: '240px', marginTop: '20px'}}>
							<SimpleMap/>
						</div>,
					</div>
				</div>

				<Table/>
			</div>
		);
	}
}

export default Event;