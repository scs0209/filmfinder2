import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
const SearchBar = loadable(() => import('./components/SearchBar/SearchBar'));
const MovieDetails = loadable(() => import('./components/MovieDetail/MovieDetails'));

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SearchBar />} />
				<Route path="/movies/:id" element={<MovieDetails />} />
			</Routes>
		</div>
	);
};

export default App;
