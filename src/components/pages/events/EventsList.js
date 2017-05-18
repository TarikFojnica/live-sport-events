import React, { Component } from 'react';
import EventsListElement from './EventsListElement';
class EventsList extends React.Component {

	render() {
		return (
			<div className="page events-list">
				<div className="row">
					<EventsListElement/>
				</div>
			</div>
		);
	}
}

export default EventsList;