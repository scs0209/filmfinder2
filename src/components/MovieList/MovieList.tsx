import React, { VFC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Grid, Typography } from '@material-ui/core';
import MovieCard from '../MovieCard/MovieCard';
import { useStyles } from './styles';

const MovieList: VFC = () => {
	const classes = useStyles();
	const movies = useSelector((state: RootState) => {
		return state.movies?.data;
	});

	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.title}>
				영화 목록
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
