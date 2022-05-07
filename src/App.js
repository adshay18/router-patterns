import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Dog from './Dog';

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
					<Redirect exact to="/dogs" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
	dogs: [
		{
			name: 'Whiskey',
			age: 5,
			src: './images/whiskey.jpg',
			facts: [
				'Whiskey loves eating popcorn.',
				'Whiskey is a terrible guard dog.',
				'Whiskey wants to cuddle with you!'
			]
		},
		{
			name: 'Duke',
			age: 3,
			src: './images/duke.jpg',
			facts: [ 'Duke believes that ball is life.', 'Duke likes snow.', 'Duke enjoys pawing other dogs.' ]
		},
		{
			name: 'Perry',
			age: 4,
			src: './images/perry.jpg',
			facts: [ 'Perry loves all humans.', 'Perry demolishes all snacks.', 'Perry hates the rain.' ]
		},
		{
			name: 'Tubby',
			age: 4,
			src: './images/tubby.jpg',
			facts: [
				'Tubby is really stupid.',
				'Tubby does not like walks.',
				'Angelina used to hate Tubby, but claims not to anymore.'
			]
		}
	]
};

export default App;
