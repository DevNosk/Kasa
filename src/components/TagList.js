import React from 'react';

const TagList = ({ tags }) => {
	return (
		<ul>
			{tags.map((tag, index) => (
				<li key={index}>{tag}</li>
			))}
		</ul>
	);
};

export default TagList;
