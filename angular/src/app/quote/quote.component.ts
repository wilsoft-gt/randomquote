import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quoteObj: Object
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getRandom()
  }

  getRandom(){
    this._http.getRandom().subscribe(data => {
      this.quoteObj = data;
      console.log(this.quoteObj)
    })
  }

}
