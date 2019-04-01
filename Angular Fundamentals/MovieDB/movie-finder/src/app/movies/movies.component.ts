import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  popularKidsMovies: Array<Movie>;
  bestDramaMovies: Array<Movie>;

  popularMoviesSub: Subscription;
  inTheatherMoviesSub: Subscription;
  popularKidsMoviesSub: Subscription;
  bestDramaMoviesSub: Subscription;

  singleMovie: Movie;
  message = null;
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.popularKidsMoviesSub = this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);
    });

    this.inTheatherMoviesSub = this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(0, 6);
    });

    this.popularKidsMoviesSub = this.moviesService.getPopularKidsMovies().subscribe(data => {
      this.popularKidsMovies = data['results'].slice(0, 6);
    })

    this.bestDramaMoviesSub = this.moviesService.getBestDramaMovies().subscribe(data => {
      this.bestDramaMovies = data['results'].slice(0, 6);
    })
  }

  fromChild(event) {
    console.log(event);
    this.message = event;
  }

  ngOnDestroy() {
    this.popularMoviesSub.unsubscribe();
    this.inTheatherMoviesSub.unsubscribe();
    this.popularKidsMoviesSub.unsubscribe();
    this.bestDramaMoviesSub.unsubscribe();
  }

}
