import React, { Component } from 'react';
import Intro from './Intro';

class Event extends React.Component {

	render() {
		return (
			<div className="page events">
				<div className="row">
					<div className="col-md-7">
						<Intro/>
					</div>

					<div className="col-md-5">
						<div className="map-container">
							<iframe
								width="600"
								height="230"
								frameBorder="0"
								src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCbXY73_OlgXUteMu1cp1yuwjNrsywtvFY
    &q=Bjelasnica" allowFullScreen>
							</iframe>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Event;