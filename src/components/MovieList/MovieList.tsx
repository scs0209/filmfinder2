import React, { VFC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Grid, Typography } from '@material-ui/core';
import MovieCard from '../MovieCard/MovieCard';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import * as api from '../../api';
import { setMovies } from '../../actions';

const MovieList: VFC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const movies = useSelector((state: RootState) => {
		return state.movies?.data;
	});

	useEffect(() => {
		async function fetchMovies() {
			const data = await api.getPopularMovies();
			dispatch(setMovies(data));
		}
		fetchMovies();
	}, [dispatch]);

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
