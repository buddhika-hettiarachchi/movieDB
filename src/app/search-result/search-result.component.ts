import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  results: any;
  state: any;

  constructor(public activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.results = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))

    this.results.subscribe(
      res => {
        this.state = res;
        console.log(this.state)

      },
      err => {
        console.log(err) 
      }
    )

  }
 
  onMovieClick(movie) {
    this.router.navigate(['/movieDetails',movie.id]) 
  }

}
