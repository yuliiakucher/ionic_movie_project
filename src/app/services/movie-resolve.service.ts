import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {MovieModel} from "../models/movie-model";
import {MovieService} from "./movie.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieResolveService implements Resolve<MovieModel[]>{

  constructor(private movieService: MovieService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieModel[]> | Promise<MovieModel[]> | MovieModel[] {
    return this.movieService.getAllMovies();
  }
}
