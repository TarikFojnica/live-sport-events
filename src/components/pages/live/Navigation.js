import React, { Component } from 'react';

class Navigation extends Component  {
	render() {
		return (
			<div className="live-navigation">
				<nav>
					<ul>
						<li>
							<a href="#">Alpine skiing</a>
						</li>

						<li>
							<a href="#">Ice hockey</a>
						</li>

						<li>
							<a href="#">Ski jumping</a>
						</li>

						<li>
							<a href="#">Curling</a>
						</li>

						<li>
							<a href="#">Snowboarding</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default navigator;