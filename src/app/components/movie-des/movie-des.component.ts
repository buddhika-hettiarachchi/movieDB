import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-des',
  templateUrl: './movie-des.component.html',
  styleUrls: ['./movie-des.component.scss']
})
export class MovieDesComponent implements OnInit,OnDestroy {

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

  videoKey:string;
  youtubeLink:string;



  @ViewChild('modal') modal: ElementRef;


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

    this.movieService.getMovieTrailerKey(this.id).subscribe(
      res => {
        this.videoKey = res['results'][0]['key']
        this.youtubeLink = `https://www.youtube.com/embed/${this.videoKey}`
      },
      err => {
        console.log(err)
      }
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


  ngOnDestroy(): void {
  this.modal.nativeElement.remove() 

  } 

 
  readMore(review){ 
    console.log(review)
    this.router.navigate(['readmore',review])
  }


  // onTrailer(){
  //   console.log("review")
  // }

  // onPlayButton(){
  //   console.log("playbutton clicked")
  // }

}
