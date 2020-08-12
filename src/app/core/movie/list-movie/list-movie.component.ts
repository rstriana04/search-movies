import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { SearchMovie } from '../models/search-movie';
import { MovieService } from '../services/movie.service';
import { selectSearchMovies } from '../store/selectors/movie.selectors';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMovieComponent implements OnInit {
  searchMovies$: Observable<SearchMovie[]> = of([]);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.searchMovies$ = this.store.pipe(select(selectSearchMovies));
  }

  public back() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  public viewDetail(searchMovie: SearchMovie) {
    if ( searchMovie && Object.keys(searchMovie).length ) {
      this.movieService.searchMovieById(searchMovie.imdbID).pipe(take(1)).subscribe(() => {
        this.matDialog.open(DetailMovieComponent, {
          width: '728px',
          height: 'auto'
        });
      });
    }
  }
}
