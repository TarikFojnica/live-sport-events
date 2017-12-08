// Tarik Fojnica

import React, { Component } from 'react';
import moment from 'moment'
import dataFlags from '../../../data'

class Table extends Component  {
	static defaultProps = {
		data: []
	};

	render() {
		let dates = [];

		let  allItems = this.props.data.map((result, id) => {
			console.log(result);

			dates[id] = moment(result.date);
			return (
				<tr className={id === 0 ? 'hidden' : ''} key={id}>
					<td>{id}</td>
					<td><img src={dataFlags[result.flag]} alt="Image"/></td>
					<td>{`${result.name} ${result.surname}`}</td>
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