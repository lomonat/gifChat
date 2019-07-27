import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const URL = "http://api.giphy.com/v1/gifs/search?q=";
const URL = "http://api.giphy.com/v1/gifs/translate?s=";
const API_KEY = '&api_key=wYpU79NTKnDDmbjatNSJgtDsim1uJyKK';
const LIMIT = '&limit=10';
const WEIRDNESS = '&weirdness=10';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  searchGIF(query) {
   // return this.http.get(URL + query + API_KEY + LIMIT);
    return this.http.get(URL + query + API_KEY + WEIRDNESS);
    //  .subscribe(res => console.log('Done', res));
  }
}

