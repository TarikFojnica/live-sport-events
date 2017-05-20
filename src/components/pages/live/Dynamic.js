// Tarik Fojnica

import React, { Component } from 'react';
import Stopwatch from '../../common/Stopwatch';
import liveIcon from '../../../assets/images/circle.svg';

class Dynamic extends Component  {
	render() {
		return (
			<div className="dynamic-element">
				<span className="live-note"><img src={liveIcon} alt="Live Icon"/> Live Event</span>
				<div className="row">
					<div className="col-md-8">
						<div className="current-player">
							<h4>Tarik Fojnica, BIH, 23</h4>
						</div>

						<div className="timeline">
							<div className="gate gate-1 finished"><div className="inner"></div><span className="time">00:00:19</span></div>
							<div className="gate gate-2 finished"><div className="inner"></div><span className="time">00:00:23</span></div>
							<div className="gate gate-3 active"><div className="inner"></div></div>
							<div className="gate gate-4 waiting"><div className="inner"></div></div>
							<div className="gate gate-5 waiting"><div className="inner"></div></div>
						</div>
					</div>

					<div className="col-md-4">
						<Stopwatch/>
					</div>
				</div>
			</div>
		);
	}
}

export default Dynamic;