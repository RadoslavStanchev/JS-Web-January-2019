import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import Movie from '../models/Movie';
import MovieDetails from '../models/Movie-Details';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS = 'discover/movie?primary_release_date.gte=2019-03-15&primary_release_date.lte=2019-04-25';
const POPULAR = 'discover/movie?sort_by=popularity.desc';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const DRAMA = 'discover/movie?with_genres=18&primary_release_year=2019';


const API_KEY = '&api_key=2c6c80e72515a452d52895dd9160403e';
const API_KEY_ALT = '?api_key=2c6c80e72515a452d52895dd9160403e';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + POPULAR + API_KEY);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + IN_THEATERS + API_KEY);
  }

  getPopularKidsMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + KIDS + API_KEY);
  }

  getBestDramaMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + DRAMA + API_KEY);
  }

  getMovieById(id: string) {
    // return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT);
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + API_KEY_ALT).pipe(tap((data) => console.log(data)))
  }
}
