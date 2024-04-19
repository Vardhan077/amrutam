import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Desktop1 from '../src/components/Desktop1';
import Desktop2 from '../src/components/Desktop2';

const RouterDOM = () => {
	return (
		<Router  basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route exact path="/" element={<HomePage />}></Route>
				<Route exact path="/desktop1" element={<Desktop1 />} />
				<Route exact path="/desktop2" element={<Desktop2 />} />
			</Routes>
		</Router>
	);
};

export default RouterDOM;
