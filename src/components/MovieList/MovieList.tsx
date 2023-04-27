import React, { VFC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import MovieCard from '../MovieCard/MovieCard';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
}));

const MovieList: VFC = () => {
	const classes = useStyles();
	const movies = useSelector((state: RootState) => {
		return state.movies?.data;
	});

	console.log(movies);

	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.title}>
				Movies
			</Typography>
			<Grid container spacing={2}>
				{movies?.map((movie: any) => (
					<Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
						<MovieCard movie={movie} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default MovieList;
