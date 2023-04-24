import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
const SearchBar = loadable(() => import('./components/SearchBar/SearchBar'));
// const MovieList = loadable(() => import('./components/MovieList/MovieList'));

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<SearchBar />} />
				{/* <Route path="/movies" element={<MovieList />} /> */}
			</Routes>
		</div>
	);
};

export default App;
