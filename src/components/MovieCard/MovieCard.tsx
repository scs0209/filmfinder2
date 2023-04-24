import React, { VFC } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { Movie } from '../../types/movie';
import { getImageUrl } from '../../api';

interface Props {
	movie: Movie;
}

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const MovieCard: VFC<Props> = ({ movie }) => {
	const classes = useStyles();
	const posterUrl = getImageUrl(movie.poster_path);

	return (
		<Card className={classes.root}>
			<CardActionArea>
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
