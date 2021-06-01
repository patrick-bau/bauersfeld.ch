import { Component, OnInit } from '@angular/core';
import {Observable, timer} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  onlyClock = false;

  constructor() { }

  ngOnInit(): void {
  }

  private currentTime: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  get time() {
    return this.currentTime;
  }

  clickOnClock(): void {
    this.onlyClock = !this.onlyClock;
  }
}
