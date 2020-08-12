import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { AppState } from '../../../reducers';
import { DetailMovie } from '../models/detail-movie';
import { ResponseSearch } from '../models/response-search';
import { AddDetailMovie } from '../store/actions/movie.actions';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) { }

  searchMovieByTitle(form: { movie: string, year: string, type: string }): Observable<ResponseSearch> {
    const type = form.type ? form.type : '';
    const year = form.year ? form.year : '';
    return this.httpClient.get<ResponseSearch>(`${ environment.apiUrl }&s=${ form.movie }&type=${ type }&y=${ year }`, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
      pluck('body')
    );
  }

  searchMovieById(id: string): Observable<DetailMovie> {
    return this.httpClient.get<DetailMovie>(`${ environment.apiUrl }&i=${ id }`, {
      observe: 'response',
      responseType: 'json'
    }).pipe(
      pluck('body'),
      tap(detailMovie => {
        if ( detailMovie && Object.keys(detailMovie).length ) {
          this.store.dispatch(AddDetailMovie({ detailMovie }));
        }
      })
    );
  }

}
