import { AfterContentChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit, AfterViewInit {

  @Input() popularMovie;
  @Output() hoverEvent = new EventEmitter();

  backdropPath: string;
  imageUrl: string;
  videoCardTitle: string;
  videoKey: string;
  youtubeLink: string;
  videoCardId: string;



  constructor(private movieService: MovieService) { }

  @ViewChild("videoModal", { static: false }) videoModal: ElementRef;


  ngOnInit(): void {
    
    this.backdropPath = this.popularMovie.backdrop_path;
    this.videoCardTitle = this.popularMovie.title
    this.videoCardId = `#${this.videoCardTitle}`
    this.imageUrl = `https://image.tmdb.org/t/p/original${this.backdropPath}`

    this.movieService.getMovieTrailerKey(this.popularMovie.id).subscribe(
      res => {
        this.videoKey = res['results'][0]['key']
        this.youtubeLink = `https://www.youtube.com/embed/${this.videoKey}`
      },
      err => {
        console.log(err)
      }
    )

  }


  ngAfterViewInit(): void {
    this.videoModal.nativeElement.addEventListener('hidden.bs.modal', function(){
      })
  }

  mouseEnter() {
    this.hoverEvent.emit(this.imageUrl)
  }


  cardClick() {
    console.log("card clicked")
  }






}
