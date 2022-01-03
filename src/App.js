import React from 'react';
import "./App.css";
import BreweryPage from './BreweryPage';
import BreweryList from './BreweryList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path='/:id' > <BreweryPage  /> </Route>
					<Route path='/' > <BreweryList /> </Route>
				</Switch>
			</Router>

		</React.Fragment>
	);
};

export default App;
