import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {
  quoteId: number;
  quotes: Object;
  constructor(private route: ActivatedRoute,
    private _http: HttpService) { }


  ngOnInit() {
    let got = parseInt(this.route.snapshot.paramMap.get("id"))
    this.quoteId = got
    this._http.getData().subscribe(dat => {
      this.quotes = dat;
      console.log(this.quotes)
    })
  }

}
