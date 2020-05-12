import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {MovieResolveService} from "../services/movie-resolve.service";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {allMovies: MovieResolveService}
  },
  {
    path: ':id/onePage',
    loadChildren: () => import('../one-film/one-film.module').then( m => m.OneFilmPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
