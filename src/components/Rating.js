import React from 'react';
import starColor from '../assets/star_color.png';
import starGrey from '../assets/star_grey.png';

function Rating({ rating }) {
	const ratingNumber = parseInt(rating);
	const stars = Array.from({ length: 5 }, (_, index) => (
		<img
			key={index}
			src={index < ratingNumber ? starColor : starGrey}
			alt={index < ratingNumber ? 'star' : 'empty-star'}
		/>
	));

	return <div className="ratingStars">{stars}</div>;
}

export default Rating;
