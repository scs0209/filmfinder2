import { MovieDetails, Movies } from '../types';
import { Movie } from './movie';

export interface MovieState {
	movies: Movie[];
	movieDetails: MovieDetails | null;
	loading: boolean;
	error: string | null;
}

const initialState: MovieState = {
	movies: [],
	movieDetails: null,
	loading: false,
	error: null,
};

export default initialState;
