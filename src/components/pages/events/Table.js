import React, { Component } from 'react';
import flagAustria from '../../../assets/images/flags/austria.svg'
import flagCanada from '../../../assets/images/flags/canada.svg'
import flagChina from '../../../assets/images/flags/china.svg'
import flagGermany from '../../../assets/images/flags/germany.svg'
import flagIndia from '../../../assets/images/flags/india.svg'
import flagRussia from '../../../assets/images/flags/russia.svg'
import flagUnitedKingdom from '../../../assets/images/flags/united-kingdom.svg'
import flagUnitedStates from '../../../assets/images/flags/united-states.svg'

class Table extends Component  {
	render() {
		return (
			<table className="table with-transparent-background">
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
					<td>Bode Miller</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>2</td>
					<td><img src={flagCanada} alt="Austria"/></td>
					<td>Kjetil Andre Aamodt</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>1</td>
					<td><img src={flagChina} alt="Austria"/></td>
					<td>MARINO Julia</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>3</td>
					<td><img src={flagGermany} alt="Austria"/></td>
					<td>Jean-Claude Killy</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>4</td>
					<td><img src={flagIndia} alt="Austria"/></td>
					<td>Toni Sailer</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>5</td>
					<td><img src={flagRussia} alt="Austria"/></td>
					<td>Alberto Tomba</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>6</td>
					<td><img src={flagUnitedStates} alt="Austria"/></td>
					<td>Ingemar Stenmark</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>7</td>
					<td><img src={flagUnitedKingdom} alt="Austria"/></td>
					<td>Hermann Maier</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>8</td>
					<td><img src={flagGermany} alt="Austria"/></td>
					<td>Lasse Kjus</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>9</td>
					<td><img src={flagIndia} alt="Austria"/></td>
					<td>Bernard Russi</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>5</td>
					<td><img src={flagRussia} alt="Austria"/></td>
					<td>Alberto Tomba</td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>6</td>
					<td><img src={flagUnitedStates} alt="Austria"/></td>
					<td>Franz Klammer </td>
					<td>1997</td>
					<td>Slalom</td>
					<td>1000.00</td>
				</tr>

				<tr>
					<td>7</td>
					<td><img src={flagUnitedKingdom} alt="Austria"/></td>
					<td>Hermann Maier</td>
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