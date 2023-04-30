import React, { VFC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { Grid, Typography } from '@material-ui/core';
import MovieCard from '../MovieCard/MovieCard';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../../actions';
import { Pagination } from '@material-ui/lab';

const MovieList: VFC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { data: searchedMovies, loading: searchLoading } = useSelector((state: RootState) => state.movies);
	const { data: popularMovies, loading: popularLoading } = useSelector((state: RootState) => state.movies);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>();
	const moviesPerPage = 10;

	// 현재 페이지에서 보여줄 영화 목록
	const visibleMovies = searchedMovies?.slice((page - 1) * moviesPerPage, page * moviesPerPage);

	console.log(searchedMovies, popularMovies);

	useEffect(() => {
		async function fetchMovies() {
			await dispatch(getPopularMovies(page) as any);
		}
		if (!searchedMovies?.length) {
			fetchMovies();
		}
	}, [dispatch, page, searchedMovies]);

	useEffect(() => {
		if (searchedMovies) {
			setTotalPages(Math.ceil(searchedMovies.length / moviesPerPage));
		} else {
			setTotalPages(Math.ceil(popularMovies?.length || 0 / moviesPerPage));
		}
	}, [searchedMovies, popularMovies]);

	const handlePageChange = useCallback((e: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	}, []);

	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.title}>
				영화 목록
			</Typography>
			<Grid container spacing={2}>
				{visibleMovies?.map((movie: any) => (
					<Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
						<MovieCard movie={movie} />
					</Grid>
				))}
			</Grid>
			<Pagination count={totalPages} page={page} onChange={handlePageChange} />
		</div>
	);
};

export default MovieList;
