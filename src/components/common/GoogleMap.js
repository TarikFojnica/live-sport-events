import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends React.Component {
	static defaultProps = {
		center: {lat: 43.7042, lng: 18.2567},
		zoom: 11
	};

	render() {
		return (
			<GoogleMapReact
				defaultCenter={this.props.center}
				defaultZoom={this.props.zoom}
				apiKey="AIzaSyDbyoIziZv2hIQgP6bJNlMKotw1sKNMHzs"
			>
			</GoogleMapReact>
		);
	}
}

export default SimpleMap;