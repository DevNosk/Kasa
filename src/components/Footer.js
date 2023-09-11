import React from 'react';
import white_logo from '../assets/white_logo.png';
import '../style/components/Footer.css';
export default function Footer() {
	return (
		<footer>
			<img src={white_logo} alt="Logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
