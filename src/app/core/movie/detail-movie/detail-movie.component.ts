import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../../reducers';
import { DetailMovie } from '../models/detail-movie';
import { selectDetailMovie } from '../store/selectors/movie.selectors';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailMovieComponent implements OnInit {
  detailMovie$: Observable<DetailMovie> = of({} as DetailMovie);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.detailMovie$ = this.store.pipe(
      select(selectDetailMovie)
    );
  }

}
