import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import housings from '../assets/data/housings.json';

export default function Home() {
	const housing = useLocation();

	return (
		<div>
			<Banner location={housing} />
			<section className="cardsContainer">
				{housings.map((housing, index) => (
					<Card location={housing} key={index} />
				))}
			</section>
		</div>
	);
}
