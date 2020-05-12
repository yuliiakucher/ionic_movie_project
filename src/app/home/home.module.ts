import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {MovieService} from "../services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import {MovieResolveService} from "../services/movie-resolve.service";
import {OneFilmPageModule} from "../one-film/one-film.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HttpClientModule,
        OneFilmPageModule
    ],
    declarations: [HomePage],
    providers: [MovieService, MovieResolveService]
})
export class HomePageModule {
}
