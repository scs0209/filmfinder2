import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieDetails } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getImageUrl } from '../../api';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { theme, useStyles } from './styles';
import { MovieState } from '../../types/state';

const MovieDetails = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const { movieDetails, loading, error } = useSelector((state: { movies: MovieState }) => state.movies);
	const posterUrl = movieDetails?.poster_path ? getImageUrl(movieDetails.poster_path) : undefined;
	const classes = useStyles();

	useEffect(() => {
		if (!id) return;
		dispatch(getMovieDetails(id) as any);
	}, [dispatch, id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	if (!movieDetails) return null;

	return (
		<MuiThemeProvider theme={theme}>
			<Paper className={classes.root} elevation={3}>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h4" className={classes.title}>
							{movieDetails.title}
						</Typography>
						<Typography variant="body1" className={classes.overview}>
							{movieDetails.overview}
						</Typography>
						<Typography variant="body1" className={classes.releaseDate}>
							{`Release Date: ${movieDetails.release_date}`}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<img src={posterUrl} alt="posterUrl" className={classes.poster} />
					</Grid>
				</Grid>
			</Paper>
		</MuiThemeProvider>
	);
};

export default MovieDetails;
