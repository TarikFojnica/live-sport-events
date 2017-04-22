import React, { Component } from 'react';
import flagAustria from '../../../assets/images/flags/austria.svg'
import flagCanada from '../../../assets/images/flags/canada.svg'
import flagChina from '../../../assets/images/flags/china.svg'
import flagGermany from '../../../assets/images/flags/germany.svg'
import flagIndia from '../../../assets/images/flags/india.svg'
import flagRussia from '../../../assets/images/flags/russia.svg'
import flagUnitedKingdom from '../../../assets/images/flags/united-kingdom.svg'
import flagunitedStates from '../../../assets/images/flags/united-states.svg'

class Table extends Component  {
	render() {
		return (
			<table className="table">
				<thead>
				<tr>
					<th>#</th>
					<th>Nation</th>
					<th>Name</th>
					<th>Year</th>
					<th>Discipline</th>
					<th>Points</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagAustria} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				</tbody>
			</table>
		);
	}
}

export default Table;