import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OneFilmPageRoutingModule} from './one-film-routing.module';

import {OneFilmPage} from './one-film.page';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OneFilmPageRoutingModule,
        HttpClientModule,
    ],
    exports: [
        OneFilmPage
    ],
    declarations: [OneFilmPage]
})
export class OneFilmPageModule {
}
