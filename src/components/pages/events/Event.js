import React, { Component } from 'react';
import Intro from './Intro';
import CountDown from '../../common/CountDown'

class Event extends React.Component {

	render() {
		return (
			<div className="page events">
				<div className="row">
					<div className="col-md-7">
						<Intro/>
					</div>

					<div className="col-md-5">
						<CountDown/>
					</div>
				</div>
			</div>
		);
	}
}

export default Event;