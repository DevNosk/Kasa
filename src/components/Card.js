import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Card.css';

export default function Card({ location }) {
	return (
		<Link to={'/fiche-logement/' + location.id} key={'' + location.id}>
			<article>
				<img src={location.cover} alt={location.title} />
				<h2>{location.title}</h2>
			</article>
		</Link>
	);
}
