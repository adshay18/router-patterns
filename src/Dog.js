import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Dog = ({ dogs }) => {
	const { name } = useParams();
	let dogDetails = [];
	for (let dog of dogs) {
		if (dog.name === name) {
			dogDetails.push(dog);
		}
	}
	let dog = dogDetails[0];
	return (
		<div className="Dog">
			<h1>{dog.name}</h1>
			<h4>Age: {dog.age}</h4>
			<img src={dog.src} />
			<ul>{dog.facts.map((fact) => <li key={uuid()}>{fact}</li>)}</ul>
		</div>
	);
};

export default Dog;
