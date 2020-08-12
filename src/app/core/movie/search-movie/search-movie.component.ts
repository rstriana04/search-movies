import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, take } from 'rxjs/operators';
import { AppState } from '../../../reducers';
import { PopupLoaderComponent } from '../../../shared/components/popup-loader/popup-loader.component';
import { MovieService } from '../services/movie.service';
import { AddSearchMovies } from '../store/actions/movie.actions';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchMovieComponent implements OnInit {
  formSearchMovie: FormGroup;

  constructor(
    private matDialog: MatDialog,
    private movieService: MovieService,
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.initFormSearchMovie();
  }

  ngOnInit(): void {

  }

  private initFormSearchMovie() {
    this.formSearchMovie = new FormGroup({
      movie: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      year: new FormControl('', Validators.maxLength(4)),
      type: new FormControl('')
    });
  }

  public sendFormSearchMovie(formSearchMovie: FormGroup) {
    if ( formSearchMovie.valid ) {
      const matDialog = this.matDialog.open(PopupLoaderComponent, {
        width: '400px',
        height: 'auto',
        disableClose: true,
        restoreFocus: true
      });
      const form = { ...formSearchMovie.value };
      this.movieService.searchMovieByTitle(form).pipe(
        debounceTime(1000),
        take(1)
      ).subscribe(results => {
        if ( results.Response.toString().toLowerCase() !== 'false' ) {
          if ( results.Search && results.Search.length ) {
            this.store.dispatch(AddSearchMovies({ moviesSearch: results.Search }));
            this.router.navigate(['../list'], { relativeTo: this.activatedRoute });
          }
          matDialog.close();
        } else {
          matDialog.close();
          alert('No se Encontraron resultados, porfavor verifica tus criterios de busqueda');
        }
      }, error => {
        matDialog.close();
        console.error(error);
        alert('Ocurrio un error inesperado, disculpanos');
      });
    }
  }
}
