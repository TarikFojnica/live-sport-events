import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

class SimpleMap extends React.Component {
	state = {
		map: {
		}
	};

	componentDidMount(){
		let _this = this;

		axios.get('http://localhost:58524/api/place/' +  this.props.id)
			.then(function (response) {
				console.log(response);
				_this.setState({
					map: {
						lat: response.data[0].latitude,
						lng: response.data[0].longitude
					}
				});
				_this.forceUpdate();

			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		console.log(this.state.map);
		return (
			<GoogleMapReact
				center={{lat: this.state.map.lat, lng: this.state.map.lng}}
				defaultZoom={11}
				apiKey="AIzaSyDbyoIziZv2hIQgP6bJNlMKotw1sKNMHzs"
			>
			</GoogleMapReact>
		);
	}
}

export default SimpleMap;