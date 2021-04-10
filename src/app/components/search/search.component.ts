import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public router: Router,public movieService:MovieService) {}

  navigateWithState(result) {
    this.router.navigateByUrl('/search', { state: result });
  }

  ngOnInit(): void {
  }

  search(input){
    this.movieService.searchMovie(input).subscribe(
      res=>{
        this.navigateWithState(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
