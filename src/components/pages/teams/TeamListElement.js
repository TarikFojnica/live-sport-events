import React, { Component } from 'react';
import au from '../../../assets/images/flags/austria.svg'

class EventsListElement extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<div className="teams-list-element">
					<div className="header">
						<h2>{this.props.country}</h2>
						<img src={this.props.flag} alt="" className="au"/>
					</div>
					<ul className="members">
						<li>Members:</li>
						<li>{this.props.members}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default EventsListElement;