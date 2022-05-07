import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Nav = ({ names }) => {
	return (
		<nav>
			<NavLink to="/dogs">Home</NavLink>
			{names.map((name) => (
				<NavLink key={uuid()} to={name}>
					{name}
				</NavLink>
			))}
		</nav>
	);
};

export default Nav;
