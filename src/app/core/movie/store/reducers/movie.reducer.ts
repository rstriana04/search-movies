import { Action, createReducer, on } from '@ngrx/store';
import { DetailMovie } from '../../models/detail-movie';
import { SearchMovie } from '../../models/search-movie';
import * as MovieActions from '../actions/movie.actions';

export interface MovieState {
  moviesSearch: SearchMovie[];
  detailMovie: DetailMovie;
}

export const initialStateMovie: MovieState = {
  moviesSearch: [],
  detailMovie: {} as DetailMovie
};

const reducer = createReducer(initialStateMovie,
  on(MovieActions.AddSearchMovies, (state, { moviesSearch }) => ( {
    ...state,
    moviesSearch
  } )),
  on(MovieActions.AddDetailMovie, (state, { detailMovie }) => ( {
    ...state,
    detailMovie
  } ))
);

export function reducerMovie(state: MovieState | undefined, action: Action) {
  return reducer(state, action);
}
