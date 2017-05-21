// Tarik Fojnica

import React, { Component } from 'react';
import TeamsListElement from './TeamListElement'

class TeamsList extends React.Component {

	render() {
		return (
			<div className="page teams-list">
				<TeamsListElement country="Austria" flag="au" members="100"/>
			</div>
		);
	}
}

export default TeamsList;