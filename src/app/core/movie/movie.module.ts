import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';

@NgModule({
  declarations: [MovieComponent, SearchMovieComponent, ListMovieComponent, DetailMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MovieModule {}
