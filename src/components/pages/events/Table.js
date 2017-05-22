// Tarik Fojnica

import React, { Component } from 'react';
import moment from 'moment'
import flagAustria from '../../../assets/images/flags/austria.svg'
import flagCanada from '../../../assets/images/flags/canada.svg'
import flagChina from '../../../assets/images/flags/china.svg'
import flagGermany from '../../../assets/images/flags/germany.svg'
import flagIndia from '../../../assets/images/flags/india.svg'
import flagRussia from '../../../assets/images/flags/russia.svg'
import flagUnitedKingdom from '../../../assets/images/flags/united-kingdom.svg'
import flagUnitedStates from '../../../assets/images/flags/united-states.svg'

class Table extends Component  {
	static defaultProps = {
		data: []
	};

	render() {
		let dates = [];
		console.log(this.props)

		let  allItems = this.props.data.map((result, id) => {

			dates[id] = moment(result.date);
			return (
				<tr key={id}>
					<td>{id}</td>
					<td>Nation</td>
					<td>{`${result.name} ${result.surname}`}</td>
					<td>{dates[id].format("YYYY")}</td>
					<td>{result.birthplace}</td>
					<td>{result.goldMedals}</td>
					<td>{result.silverMedals}</td>
					<td>{result.bronzeMedals}</td>
				</tr>
			)
		});
		return (
			<table className="table with-transparent-background">
				<thead>
				<tr>
					<th>#</th>
					<th>Nation</th>
					<th>Name</th>
					<th>Year</th>
					<th>Birthplace</th>
					<th>Gold Medals</th>
					<th>Silver Medals</th>
					<th>Bronze Medals</th>

				</tr>
				</thead>
				<tbody>
				{allItems}
				</tbody>
			</table>
		);
	}
}

export default Table;