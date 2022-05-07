import { useParams } from 'react-router-dom';

const Dog = ({ dogs }) => {
	const params = useParams();
	console.log(params);
	let dog = dogs[0];
	console.log(dog);
};

export default Dog;
