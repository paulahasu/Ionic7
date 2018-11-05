import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  
Nome: Paula Akemi RA: 817126817

*/
@Injectable()
export class MovieProvider {

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/latest?api_key='
      + this.getApiKey());
  }

  getApiKey(): string {
    return '9a8e604506af55804ef18df7f8d27baf';
  }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='
      + this.getApiKey());
  }

  getGenres() {
    return this.http.get(this.baseApiPath + '/genre/movie/list?api_key='
      + this.getApiKey());
  }

}
