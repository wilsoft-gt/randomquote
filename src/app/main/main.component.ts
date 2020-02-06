import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  quotes: Object;
  quote: Object;
  chunk: number = 1
  next: string = "https://fathomless-garden-32766.herokuapp.com/api/quotes/?format=json";

  constructor(
    private _http: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.parseData()
  }

  getNext(next, data) {
    this.next = next
    if (data > 0) {
      this.chunk += 1
    } else {
      this.chunk -= 1
    }
    this.parseData()
  }

  parseData() {
    this._http.nextAssign(this.next)
    this._http.getData().subscribe(dat => {
      this.quotes = dat;
    })
  }

  onSelect(department) {
    this.router.navigate(['simple', department.id])
  }

}
