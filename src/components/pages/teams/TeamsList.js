// Tarik Fojnica

import React, { Component } from 'react';
import TeamsListElement from './TeamListElement'

class TeamsList extends React.Component {

	render() {
		return (
			<div className="page teams-list">
				<TeamsListElement/>
				<TeamsListElement/>
				<TeamsListElement/>
				<TeamsListElement/>
				<TeamsListElement/>
				<TeamsListElement/>
			</div>
		);
	}
}

export default TeamsList;