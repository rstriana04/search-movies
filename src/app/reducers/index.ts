import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MovieState, reducerMovie } from '../core/movie/store/reducers/movie.reducer';

export interface AppState {
  movie: MovieState
}

export const reducers: ActionReducerMap<AppState> = {
  movie: reducerMovie
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
