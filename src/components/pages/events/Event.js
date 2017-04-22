import React, { Component } from 'react';

class Event extends React.Component {

	componentDidMount() {
		console.log("this works");
	}

	render() {
		return (
			<div className="page events">
				<h1>Event</h1>
			</div>
		);
	}
}

export default Event;