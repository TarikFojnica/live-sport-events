import React, { Component } from 'react';
import Navigation from './Navigation';
import Dynamic from './Dynamic';

class Live extends React.Component {

	render() {
		return (
			<div className="page live">
				<Navigation/>
				<Dynamic/>
			</div>
		);
	}
}

export default Live;