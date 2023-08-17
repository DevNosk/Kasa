import React, { useState } from 'react';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';
import '../style/Gallery.css';
export default function Gallery({ imagesList }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentImage = imagesList[currentIndex];

	const slideLeft = () => {
		setCurrentIndex(
			currentIndex === 0 ? imagesList.length - 1 : currentIndex - 1,
		);
	};

	const slideRight = () => {
		setCurrentIndex(
			currentIndex === imagesList.length - 1 ? 0 : currentIndex + 1,
		);
	};

	return (
		<div className="descriptionHousings">
			<img src={currentImage} alt="Logement" className="imageHousings" />
			{imagesList.length === 1 ? null : (
				<div>
					<img onClick={() => slideLeft()} src={arrowLeft} alt="Précédente" />
					<p>
						{currentIndex + 1}/{imagesList.length}
					</p>
					<img onClick={() => slideRight()} src={arrowRight} alt="Suivante" />
				</div>
			)}
		</div>
	);
}
