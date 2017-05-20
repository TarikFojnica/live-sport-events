// Tarik Fojnica

import React, { Component } from 'react';
import Navigation from './Navigation';
import Dynamic from './Dynamic';
import Standings from './Standings'

class Live extends React.Component {

	render() {
		return (
			<div className="page live">
				<Navigation/>
				<Dynamic/>
				<Standings/>
			</div>
		);
	}
}

export default Live;