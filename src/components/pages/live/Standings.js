// Tarik Fojnica

import React, { Component } from 'react';
import axios from 'axios';
import flagAustria from '../../../assets/images/flags/austria.svg'
import flagCanada from '../../../assets/images/flags/canada.svg'
import flagChina from '../../../assets/images/flags/china.svg'
import flagGermany from '../../../assets/images/flags/germany.svg'
import flagIndia from '../../../assets/images/flags/india.svg'
import flagRussia from '../../../assets/images/flags/russia.svg'
import flagUnitedKingdom from '../../../assets/images/flags/united-kingdom.svg'
import flagUnitedStates from '../../../assets/images/flags/united-states.svg'

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
	}

	render() {
		let  allItems = this.state.data.map((result, id) => {
			console.log(result);
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>{result.flag}</td>
					<td>{result.name}</td>
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