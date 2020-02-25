import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  quotes: Object;
  quote: Object;
  next: string = "https://fathomless-garden-32766.herokuapp.com/api/quotes/?format=json";

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.parseData()
  }

  getNext(next) {
    this.next = next
    this.parseData()
  }

  parseData() {
    this._http.getData(this.next).subscribe(dat => {
      this.quotes = dat;
    })
  }

  getQuote(obj){
    this.quote = obj
    console.log(this.quote)
  }

}
