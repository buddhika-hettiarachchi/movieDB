import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies:any[];
  popularMovieImageUrl:string;
  firstMoviePosterPath:string;
  popularMovieBackGroundColor:string;
  page:number = 2;
  popularMovieList:any[]
  showLoading:boolean = false;



  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies("1").subscribe(
      res=>{
        this.popularMovies = res['results']
        console.log(this.popularMovies)
        this.firstMoviePosterPath = this.popularMovies[0]['backdrop_path']
        this.popularMovieImageUrl = `linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.7) 18%, rgba(0, 212, 255, 0.7) 100%),url( https://image.tmdb.org/t/p/original/${this.firstMoviePosterPath})`
      },
      err=>{
        console.log(err)
      }
    )
    this.showLoading = true
    this.movieService.getPopularMovies((this.page + 1).toString()).subscribe(
      res=>{
        this.showLoading = false;
        this.popularMovieList = res['results']
        // console.log(this.popularMovies)
        // this.firstMoviePosterPath = this.popularMovieList[0]['backdrop_path']
        // this.popularMovieImageUrl = `linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.7) 18%, rgba(0, 212, 255, 0.7) 100%),url( https://image.tmdb.org/t/p/original/${this.firstMoviePosterPath})`
      },
      err=>{
        this.showLoading = false;
        console.log(err)
      }
    )
  }

  hoverPopularMovie(imageUrl){
    console.log("hover over   " + imageUrl)
    this.popularMovieImageUrl =  `linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.7) 18%, rgba(0, 212, 255, 0.7) 100%),url( ${imageUrl})`

  }

  getNextMovies(){
    this.showLoading = true;
    this.movieService.getPopularMovies((this.page++).toString()).subscribe(
      res=>{
        this.showLoading = false;
        this.popularMovieList = res['results']
        // console.log(this.popularMovies)
        // this.firstMoviePosterPath = this.popularMovieList[0]['backdrop_path']
        // this.popularMovieImageUrl = `linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.7) 18%, rgba(0, 212, 255, 0.7) 100%),url( https://image.tmdb.org/t/p/original/${this.firstMoviePosterPath})`
      },
      err=>{
        this.showLoading = false;
        console.log(err)
      }
    )
  }

  getPreviousMovies(){
    this.showLoading = true;
    this.movieService.getPopularMovies((this.page--).toString()).subscribe(
      res=>{
        this.popularMovieList = res['results']
        this.showLoading = false;

        // console.log(this.popularMovies)
        // this.firstMoviePosterPath = this.popularMovieList[0]['backdrop_path']
        // this.popularMovieImageUrl = `linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 0.7) 18%, rgba(0, 212, 255, 0.7) 100%),url( https://image.tmdb.org/t/p/original/${this.firstMoviePosterPath})`
      },
      err=>{
        console.log(err)
        this.showLoading = false;
      }
    )
  }

}
