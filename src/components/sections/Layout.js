import React, { Component } from 'react';

class Layout extends React.Component {

	render() {
		return (
			<div className="app-container">
				<div className="container">
					<div className="page">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Layout;