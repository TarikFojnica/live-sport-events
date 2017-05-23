// Tarik Fojnica

import React, { Component } from 'react';
import axios from 'axios';
import dataFlags from '../../../data'
import events from '../../../vendor/pub-sub';
class StandingsTable extends Component  {

	state = {
		data: []
	}

	componentDidMount() {
		let _this = this;

		axios.get('http://localhost:58524/api/result/1')
			.then(function (response) {
				console.log(response);
				_this.setState({
					data: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			});

		events.subscribe('NEW_PLAYER_STARTED', function(obj) {
			console.log(obj);
		});
	}

	render() {
		let  allItems = this.state.data.map((result, id) => {
			console.log(result);
			return (
				<tr key={id}>
					<td>{id + 1}</td>
					<td><img src={dataFlags[result.flag]} alt=""/></td>
					<td>{`${result.name} ${result.surname}`}</td>
					<td>{result.time}</td>
				</tr>
			)
		});

		return (
			<div className="standings-table">
				<h4>Alpine skiing standings</h4>
				<table className="table with-transparent-background">
					<thead>
					<tr>
						<th>#</th>
						<th>Nation</th>
						<th>Name</th>
						<th>Time</th>
					</tr>
					</thead>
					<tbody>
						{allItems}
					</tbody>
				</table>
			</div>
		);
	}
}

export default StandingsTable;