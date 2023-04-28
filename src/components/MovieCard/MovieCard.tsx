import React, { VFC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Movie } from '../../types/movie';
import { getImageUrl } from '../../api';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

interface Props {
	movie: Movie;
}

const MovieCard: VFC<Props> = ({ movie }) => {
	const classes = useStyles();
	const posterUrl = getImageUrl(movie.poster_path);

	return (
		<Card className={classes.root}>
			<CardActionArea component={Link} to={`/movies/${movie.id}`}>
				<CardMedia className={classes.media} image={posterUrl} title={movie.title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{movie.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{movie.vote_average}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default MovieCard;
