import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  next: string
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.next)
  }

  nextAssign(url){
    this.next = url
  }

  getRandom() {
    return this.http.get("https://fathomless-garden-32766.herokuapp.com/api/random/?format=json")
  }
}
