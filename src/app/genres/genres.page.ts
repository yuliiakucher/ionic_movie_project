import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../services/movie.service";
import {MovieModel} from "../models/movie-model";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  moviesByGenre: MovieModel[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private movieService: MovieService,
      private router: Router) {
    this.activatedRoute.params
        .subscribe(params =>
            this.movieService
                .getMovieByGenre(params.id)
                .subscribe(value =>{
                  this.moviesByGenre = value.results
                  console.log(value.results)
                }
                    ))
  }

  ngOnInit() {
  }

    navigate(movie: MovieModel) {
        this.router.navigate(
            [movie.id, 'onePage'],
            {
                relativeTo: this.activatedRoute
            }
        )
    }
}
