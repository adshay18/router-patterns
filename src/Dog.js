import { useParams } from 'react';

const Dog = ({ dogs }) => {
	const { name } = useParams();
	console.log(name);
};

export default Dog;
