import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // popularMovies:any[];
  // popularMovieImageUrl:string;

  constructor(private movieService : MovieService){

  }


  ngOnInit(): void {
    // this.movieService.getPopularMovies().subscribe(
    //   res=>{
    //     console.log(res['results'])
    //     this.popularMovies = res['results']
    //   },
    //   err=>{
    //     console.log(err)
    //   }
    // )
  }

  // hoverPopularMovie(imageUrl){
  //   console.log("hover over   " + imageUrl)
  //   this.popularMovieImageUrl = "url(" + imageUrl + ")"
  // }

  // title = 'movieDB';
}
