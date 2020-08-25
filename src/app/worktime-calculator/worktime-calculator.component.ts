import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worktime-calculator',
  templateUrl: './worktime-calculator.component.html',
  styleUrls: ['./worktime-calculator.component.scss']
})
export class WorktimeCalculatorComponent implements OnInit {
  timestamp = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onTimeChanged(time: Date): void {
   this.timestamp = time;
  }
}
