import React, { Component } from 'react';

class EventsListElement extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="team-list-element">
					<div className="header">
						<h2>Bosnia and Herzegovina</h2>
						<img src="http://placehold.it/32x32" alt="" className="flag"/>
					</div>
					<ul className="memebers">
						<li>Members:</li>
						<li>23</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default EventsListElement;