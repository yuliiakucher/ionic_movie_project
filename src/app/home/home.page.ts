import {Component} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {MovieModel} from "../models/movie-model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    films: MovieModel[];

    constructor(
        private activatedRoute: ActivatedRoute,
        private movieService: MovieService,
        private router: Router) {
        this.films = this.activatedRoute.snapshot.data.allMovies.results;
        this.movieService.getGenre().subscribe(value => {
            for (const film of this.films) {
                film["genre_ids"] = film['genre_ids'].map(function (num) {
                    for (const f of value['genres']) {
                        if (num === f.id)
                            return f.name;
                    }
                });

            }
        })


    }


    navigate(film: MovieModel) {
        this.router.navigate(
            [film.id,'onePage'],
            {
                relativeTo: this.activatedRoute
            }
        )
    }

    goToGenre(g: any) {
        console.log(g)

    }
}
