// Tarik Fojnica

import React, { Component } from 'react';
import TeamsListElement from './TeamListElement';

import axios from 'axios';
const server = 'http://localhost:58524/api/';

class TeamsList extends React.Component {
	componentDidMount() {
		axios.get(server + 'team')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="page teams-list">
				<div className="row">
					<TeamsListElement country="Austria" flag="au" members="100"/>
				</div>
			</div>
		);
	}
}

export default TeamsList;