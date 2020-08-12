import { createSelector } from '@ngrx/store';
import { AppState } from '../../../../reducers';

export const selectStateMovie = (state: AppState) => state.movie;
export const selectSearchMovies = createSelector(selectStateMovie, state => state.moviesSearch);
export const selectDetailMovie = createSelector(selectStateMovie, state => state.detailMovie);

