import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieModel} from "../models/movie-model";
import {GenreModel} from "../models/genre-model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<MovieModel[]>{
    return this.httpClient.get<MovieModel[]>('https://api.themoviedb.org/3/discover/movie?api_key=763e927c3da1db2958384dd02cddaa12&page=2')
  }

  getSingleMovie(id: string): Observable<MovieModel>{
    return this.httpClient.get<MovieModel>(`https://api.themoviedb.org/3/movie/${id}?api_key=763e927c3da1db2958384dd02cddaa12`)
  }

  getGenre(): Observable<GenreModel[]>{
    return this.httpClient.get<GenreModel[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=763e927c3da1db2958384dd02cddaa12')
  }
}
