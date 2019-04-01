import { Component, OnInit, Input, Output } from '@angular/core';
import Movie from '../models/Movie';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie;
  @Output()
  clickButtonEmitter: EventEmitter<number> = new EventEmitter<number>();
  imagePath: string;

  constructor() { }

  ngOnInit() {
    console.log(this.movie.poster_path + 'from child')
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }

  clickButton() {
    console.log('button with id - ' + this.movie.id);
    this.clickButtonEmitter.emit(this.movie.id)
  }

}
