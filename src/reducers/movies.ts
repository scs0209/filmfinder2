import { MoviesActionTypes, MovieAction } from '../actions/types';
import { Movies, MovieDetails } from '../types';

export interface MoviesState {
	loading: boolean;
	error: string | null;
	data: Movies | null;
	movieDetails?: MovieDetails | null;
}

const initialState: MoviesState = {
	loading: false,
	error: null,
	data: null,
	movieDetails: null,
};

const moviesReducer = (state = initialState, action: MovieAction): MoviesState => {
	switch (action.type) {
		case MoviesActionTypes.SEARCH_MOVIES_REQUEST:
			return { ...state, loading: true };
		case MoviesActionTypes.SEARCH_MOVIES_SUCCESS:
			return { ...state, loading: false, error: null, data: action.payload };
		case MoviesActionTypes.SEARCH_MOVIES_FAILURE:
			return { loading: false, error: action.payload, data: null };
		case MoviesActionTypes.GET_MOVIE_DETAILS_REQUEST:
			return { ...state, loading: true };
		case MoviesActionTypes.GET_MOVIE_DETAILS_SUCCESS:
			return { loading: false, error: null, data: state.data, movieDetails: action.payload };
		case MoviesActionTypes.GET_MOVIE_DETAILS_FAILURE:
			return { ...state, loading: false, error: action.payload, movieDetails: null };
		case MoviesActionTypes.SET_MOVIES:
			console.log(state, action.payload);
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

export default moviesReducer;
