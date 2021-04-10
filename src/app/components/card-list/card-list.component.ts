import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  backdropPath: string;
  popularMovieImageUrl: string;
  ImageUrl: string;
  movieId:string;

  releaseDate: string;
  originalTitle: string;
  @Input() popularMovie
  @Input() gridView;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.backdropPath = this.popularMovie.poster_path;
    this.releaseDate = this.popularMovie.release_date;
    this.originalTitle = this.popularMovie.title
    this.movieId = this.popularMovie.id;

    this.ImageUrl = `https://image.tmdb.org/t/p/original${this.backdropPath}`
    this.popularMovieImageUrl = "url(" + this.ImageUrl + ")"
  }

  onMovieDes() {
    this.router.navigate(['/movieDetails',this.movieId])
  };

}
