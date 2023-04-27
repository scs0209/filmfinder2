import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovieDetails } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { MoviesState } from '../../reducers/movies';
import { getImageUrl } from '../../api';
import { MuiThemeProvider, createMuiTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#00bcd4',
		},
		secondary: {
			main: '#f44336',
		},
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: theme.spacing(3),
		backgroundColor: '#fafafa',
		boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
		borderRadius: '10px',
		maxWidth: '800px',
		margin: '0 auto',
	},
	title: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(2),
		fontWeight: 'bold',
		color: '#444',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		textAlign: 'center',
	},
	overview: {
		marginBottom: theme.spacing(2),
		color: '#555',
		fontSize: '1.2rem',
		lineHeight: '1.5',
		textAlign: 'center',
	},
	poster: {
		maxWidth: '100%',
		height: 'auto',
	},
	releaseDate: {
		marginTop: theme.spacing(2),
		color: '#777',
		fontSize: '1rem',
		textAlign: 'center',
	},
}));

const MovieDetails = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const { movieDetails, loading, error } = useSelector((state: { movies: MoviesState }) => state.movies);
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
