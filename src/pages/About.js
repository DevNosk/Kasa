import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import '../style/pages/About.css';
import aboutdata from '../assets/data/about.json';
export default function About() {
	const location = useLocation();

	return (
		<div>
			<Banner location={location} />
			<div className="aboutCollapse">
				{aboutdata.map((information, index) => {
					return (
						<Collapse
							title={information.title}
							content={information.content}
							key={`about${index}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
