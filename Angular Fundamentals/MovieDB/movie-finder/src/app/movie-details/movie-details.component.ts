import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import MovieDetails from '../models/Movie-Details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  // id: string;
  // movie: MovieDetails;
  // movieGenres: string;

  // constructor(private moviesService: MovieService, private route: ActivatedRoute) {

  //  }
  movie$: Observable<MovieDetails>;
  movieId: string;

  constructor(private route: ActivatedRoute, private moviesService: MovieService){
    this.movieId = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.movie$ = this.moviesService.getMovieById(this.movieId);
    // this.id = this.route.snapshot.params['id'];
    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    // })
    // this.moviesService.getMovieById(this.id).subscribe((data) => {
    //   this.movie = data;
    //   this.movieGenres = this.movie.genres.map(el => el['name']).join(' ')
  }

}
