import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneFilmPage } from './one-film.page';

const routes: Routes = [
  {
    path: '',
    component: OneFilmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneFilmPageRoutingModule {}
