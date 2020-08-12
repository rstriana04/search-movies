import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieComponent } from './movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  {
    path: '', component: MovieComponent, children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: SearchMovieComponent },
      { path: 'list', component: ListMovieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {}
