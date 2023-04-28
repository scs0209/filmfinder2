import { MovieDetails } from '../types';
import { Movie } from './movie';

export interface MovieState {
	data: Movie[] | null;
	movieDetails?: MovieDetails | null;
	loading: boolean;
	error: string | null;
}

const initialState: MovieState = {
	data: [],
	movieDetails: null,
	loading: false,
	error: null,
};

export default initialState;
