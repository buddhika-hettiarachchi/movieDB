import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-des',
  templateUrl: './movie-des.component.html',
  styleUrls: ['./movie-des.component.scss']
})
export class MovieDesComponent implements OnInit {

  id: string
  backdropPath: string;
  popularMovieImageUrl: string;
  ImageUrl: string;
  posterUrlPart: string;
  posterUrl: string;
  title: string;
  releaseYear: string;
  overview: string;
  runtime: string;
  genres: any;
  castBackdropPath: string;
  castList: any[];
  movieReviewList




  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService) {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');;
    });
  }

  ngOnInit(): void {
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0)
    // });
   // window.scrollTo(0, 0);


    this.movieService.getMoviebyId(this.id).subscribe(
      (res => {
        console.log(res)
        this.backdropPath = res['backdrop_path']
        this.posterUrlPart = res['poster_path']
        this.title = res['title']
        this.releaseYear = res['release_date'].split('-')[0]
        this.overview = res['overview']
        this.runtime = res['runtime']
        this.genres = res['genres'].map(a => a.name).toString()
        console.log(this.genres)




        this.ImageUrl = `https://image.tmdb.org/t/p/original${this.backdropPath}`
        this.posterUrl = `https://image.tmdb.org/t/p/original${this.posterUrlPart}`
        this.popularMovieImageUrl = "url(" + this.ImageUrl + ")"
      }),
      (err => {
        console.log(err)
      })
    )

    this.movieService.getCast(this.id).subscribe(
      res => {
        this.castList = res['cast'];

      },
      err => {
        console.log(err)
      }
    )

    this.movieService.getMovieReviews(this.id).subscribe(
      res=>{

        this.movieReviewList = res['results']
      },
      err=>{
        console.log(err)
      }
    )
  }


  readMore(review){
    console.log(review)
  }

  //   adult: false
  // cast_id: 0
  // character: "Diana Prince / Wonder Woman"
  // credit_id: "595686e4c3a368382e050da4"
  // gender: 1
  // id: 90633
  // known_for_department: "Acting"
  // name: "Gal Gadot"
  // order: 0
  // original_name: "Gal Gadot"
  // popularity: 45.15
  // profile_path: "/fysvehTvU6bE3JgxaOTRfvQJzJ4.jpg

}
