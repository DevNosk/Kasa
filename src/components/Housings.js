import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../assets/data/housings.json';
import starColor from '../assets/star_color.png';
import starGrey from '../assets/star_grey.png';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import '../style/Housings.css';
export default function Housings() {
	const params = useParams();
	const id = params.id;
	const navigate = useNavigate();
	const selectedItem = data.find(item => item.id === id);

	useEffect(() => {
		if (!selectedItem) {
			navigate('*');
		}
	}, [selectedItem, navigate]);

	if (selectedItem) {
		const {
			pictures,
			title,
			location,
			host,
			tags,
			rating,
			description,
			equipments,
		} = selectedItem;

		const ratingNumber = parseInt(rating);
		const stars = Array.from({ length: 5 }, (_, index) => (
			<img
				key={index}
				src={index < ratingNumber ? starColor : starGrey}
				alt={index < ratingNumber ? 'star' : 'empty-star'}
			/>
		));

		return (
			<section className="housingsContent">
				<Gallery imagesList={pictures} />

				<div className="titleLocationHostStars">
					<div className="titleLocation">
						<div>
							<h1>{title}</h1>
							<p>{location}</p>
						</div>
						<ul>
							{tags.map((tag, index) => (
								<li key={index}>{tag}</li>
							))}
						</ul>
					</div>
					<div className="hostStars">
						<div className="host">
							<p>{host.name}</p>
							<img src={host.picture} alt={host.name} />
						</div>
						<div>{stars}</div>
					</div>
				</div>
				<div className="housingsCollapse">
					<Collapse title="Description" content={description} />
					<Collapse
						title="Équipements"
						content={
							<ul>
								{equipments.map((equipment, index) => (
									<li key={index}>{equipment}</li>
								))}
							</ul>
						}
					/>
				</div>
			</section>
		);
	}
}