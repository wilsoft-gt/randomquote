import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service'
import { quotesData } from '../interfaces'

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  quoteId: number;
  quotes: quotesData;
  constructor(private route: ActivatedRoute,
    private _http: HttpService) { }


  ngOnInit() {
    let got = parseInt(this.route.snapshot.paramMap.get("id"))
    this.quoteId = got
    this._http.getData().subscribe((dat : any) => {
      this.quotes = dat;
      console.log(this.quotes)
    })
  }

}
