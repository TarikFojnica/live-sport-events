import React, { Component } from 'react';
import logoImg from '../../assets/images/mountain-range.svg'
import liveIcon from '../../assets/images/circle.svg'

class Header extends Component  {
	render() {
		return (
			<header>
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="navbar-header">
							<a className="navbar-brand" href="#"><img src={logoImg} alt=""/>EYOF 2019</a>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#">Home</a></li>
							<li><a href="#">Teams</a></li>
							<li><a href="#">Events</a></li>
							<li className="live"><a href="#"><img src={liveIcon} alt="Live"/>Live</a></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;