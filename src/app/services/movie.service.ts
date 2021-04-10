import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(protected httpClient: HttpClient) { }

  getPopularMovies(page){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=0b857891bfc46ee7d568976e6fd0d0e3&language=en-US&page=${page}`)
  }

  getMoviebyId(id) {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0b857891bfc46ee7d568976e6fd0d0e3&language=en-US`);
  }

  getCast(id){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0b857891bfc46ee7d568976e6fd0d0e3&language=en-US`)
  }

  getMovieReviews(id){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0b857891bfc46ee7d568976e6fd0d0e3&language=en-US&page=1`)
  }

  getMovieTrailerKey(id){
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=0b857891bfc46ee7d568976e6fd0d0e3&language=en-US
    `)
  }

  searchMovie(searchTerm){
    return this.httpClient.get(` https://api.themoviedb.org/3/search/movie?api_key=0b857891bfc46ee7d568976e6fd0d0e3&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
  }




}
