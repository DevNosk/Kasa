import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './Banner';
import Card from './Card';
import Housings from '../assets/data/housings.json';

export default function Home() {
	const housing = useLocation();

	return (
		<div>
			<Banner location={housing} />
			<section className="cardsContainer">
				{Housings.map((housing, index) => (
					<Card location={housing} key={index} />
				))}
			</section>
		</div>
	);
}
