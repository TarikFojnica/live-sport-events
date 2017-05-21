// Tarik Fojnica

import React, { Component } from 'react';
import Intro from './Intro';
import CountDown from '../../common/CountDown'
import Table from './Table'

class Event extends React.Component {



	render() {
		return (
			<div className="page events">
				<div className="row">
					<div className="col-md-6">
						<Intro/>
					</div>

					<div className="col-md-6">
						<CountDown/>
					</div>
				</div>

				<Table/>
			</div>
		);
	}
}

export default Event;