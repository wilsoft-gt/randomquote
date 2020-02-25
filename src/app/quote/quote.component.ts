import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { singleQuote } from '../interfaces'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quoteObj: singleQuote;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getRan()
  }

  getRan(){
    this._http.getRandom().subscribe((data:any) => {
      this.quoteObj = data;
      console.log(this.quoteObj)
    })
  }

}
