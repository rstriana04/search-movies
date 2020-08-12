import { createAction, props } from '@ngrx/store';
import { DetailMovie } from '../../models/detail-movie';
import { SearchMovie } from '../../models/search-movie';

export const AddSearchMovies = createAction('[Movie] Add Results Search Movie', props<{ moviesSearch: SearchMovie[] }>());
export const AddDetailMovie = createAction('[Movie] Add Detail Movie', props<{ detailMovie: DetailMovie }>());
