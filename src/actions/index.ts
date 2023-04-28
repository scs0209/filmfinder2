import { Dispatch } from 'redux';
import * as api from '../api';
import { MoviesActionTypes, SetMoviesAction } from './types';
import { MovieDetails } from '../types';
import { Movie } from '../types/movie';

export const searchMovies = (query: string) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: MoviesActionTypes.SEARCH_MOVIES_REQUEST });

		const data = await api.searchMovies(query);

		dispatch({
			type: MoviesActionTypes.SEARCH_MOVIES_SUCCESS,
			payload: data as Movie,
		});
	} catch (error: any) {
		dispatch({
			type: MoviesActionTypes.SEARCH_MOVIES_FAILURE,
			payload: error.message as string,
		});
	}
};

export const getMovieDetails =
	(id: string) =>
	async (dispatch: Dispatch): Promise<any> => {
		try {
			dispatch({ type: MoviesActionTypes.GET_MOVIE_DETAILS_REQUEST });

			const data = await api.getMovieDetails(id);

			dispatch({
				type: MoviesActionTypes.GET_MOVIE_DETAILS_SUCCESS,
				payload: data as MovieDetails,
			});
		} catch (error: any) {
			dispatch({
				type: MoviesActionTypes.GET_MOVIE_DETAILS_FAILURE,
				payload: error.message,
			});
		}
	};

export const setMovies = (movies: Movie[]): SetMoviesAction => {
	return {
		type: MoviesActionTypes.SET_MOVIES,
		payload: movies,
	};
};
