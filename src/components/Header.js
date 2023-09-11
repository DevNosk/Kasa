import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/components/Header.css';
function Header() {
	return (
		<div className="header">
			<img src={logo} alt="Logo" />
			<div className="nav">
				<NavLink
					to="/a-propos"
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}
				>
					A Propos
				</NavLink>

				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}
				>
					Accueil
				</NavLink>
			</div>
		</div>
	);
}

export default Header;
