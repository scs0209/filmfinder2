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
			// popularMovies?.length || 0 설정한 이유는 popularMovies가 undefined일 경우 .length를 사용할 수 없기 때문에 타입스크립트에서 에러를 발생시키기 때문입니다.
			//그래서 에러를 해결하기 위해서는 popularMovies가 undefined일 경우를 처리해주어야 하는데, popularMovies?.length || 0 이렇게 nullish coalescing 연산자를 사용하여 popularMovies가 undefined일 경우 0을 반환하도록 처리할 수 있습니다.
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
			<Pagination count={totalPages} page={page} onChange={handlePageChange} className={classes.pagination} />
		</div>
	);
};

export default MovieList;
