import { AnyAction, Dispatch } from 'redux';
import * as api from '../api';
import { MoviesActionTypes, SetMoviesAction } from './types';
import { MovieDetails, Movies } from '../types';

export const searchMovies = (query: string) => async (dispatch: Dispatch) => {
	try {
		dispatch({ type: MoviesActionTypes.SEARCH_MOVIES_REQUEST });

		const data = await api.searchMovies(query);

		dispatch({
			type: MoviesActionTypes.SEARCH_MOVIES_SUCCESS,
			payload: data,
		});
	} catch (error: any) {
		dispatch({
			type: MoviesActionTypes.SEARCH_MOVIES_FAILURE,
			payload: error.message as string,
		});
	}
};

export const getMovieDetails = (id: string) => async (dispatch: Dispatch) => {
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

export const setMovies = (movies: Movies): SetMoviesAction => {
	return {
		type: MoviesActionTypes.SET_MOVIES,
		payload: movies,
	};
};
