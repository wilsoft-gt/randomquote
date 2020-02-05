import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(dat){
    return this.http.get(dat)
  }

  getRandom() {
    return this.http.get("https://fathomless-garden-32766.herokuapp.com/api/random/?format=json")
  }
}
