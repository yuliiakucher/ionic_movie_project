import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieModel} from "../models/movie-model";
import {MovieService} from "../services/movie.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-one-film',
    templateUrl: './one-film.page.html',
    styleUrls: ['./one-film.page.scss'],
})
export class OneFilmPage implements OnInit {

    movie: MovieModel;
    m: boolean;
    pc: boolean;

    constructor(
        private movieService: MovieService,
        private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.movieService.getSingleMovie(params.id).subscribe(value => {
            this.movie = value
            console.log(value)
        }))
    }

    ngOnInit() {
    }


}
