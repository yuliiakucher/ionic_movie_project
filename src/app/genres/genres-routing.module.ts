import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenresPage } from './genres.page';

const routes: Routes = [
  {
    path: '',
    component: GenresPage
  },
  {
    path: ':id/onePage',
    loadChildren: () => import('../one-film/one-film.module').then( m => m.OneFilmPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresPageRoutingModule {}
