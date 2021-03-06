import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Dog from './Dog';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import duke from './images/duke.jpg';
import perry from './images/perry.jpg';

function App({ dogs }) {
	const names = [];
	for (let dog of dogs) {
		names.push(dog.name);
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Nav names={names} />
				<Switch>
					<Route exact path="/dogs/:name">
						<Dog dogs={dogs} />
					</Route>
					<Redirect to="/dogs" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	dogs: [
		{
			id: 1,
			name: 'Whiskey',
			age: 5,
			src: whiskey,
			facts: [
				'Whiskey loves eating popcorn.',
				'Whiskey is a terrible guard dog.',
				'Whiskey wants to cuddle with you!'
			]
		},
		{
			id: 2,
			name: 'Duke',
			age: 3,
			src: duke,
			facts: [ 'Duke believes that ball is life.', 'Duke likes snow.', 'Duke enjoys pawing other dogs.' ]
		},
		{
			id: 3,
			name: 'Perry',
			age: 4,
			src: perry,
			facts: [ 'Perry loves all humans.', 'Perry demolishes all snacks.', 'Perry hates the rain.' ]
		},
		{
			id: 4,
			name: 'Tubby',
			age: 4,
			src: tubby,
			facts: [
				'Tubby is really stupid.',
				'Tubby does not like walks.',
				'Angelina used to hate Tubby, but claims not to anymore.'
			]
		}
	]
};

export default App;
