import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
const SearchBar = loadable(() => import('./components/SearchBar/SearchBar'));
const MovieDetails = loadable(() => import('./components/MovieDetail/MovieDetails'));

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#222',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'center',
	},
	logoContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		width: '60px',
		height: '60px',
		marginRight: theme.spacing(1),
	},
	title: {
		fontWeight: 'bold',
		color: '#fff',
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<div className={classes.logoContainer}>
						<img src="/favicon.png" alt="logo" className={classes.logo} />
						<Typography variant="h6" className={classes.title}>
							FILM FINDER
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<Routes>
				<Route path="/" element={<SearchBar />} />
				<Route path="/movies/:id" element={<MovieDetails />} />
			</Routes>
		</div>
	);
};

export default App;
