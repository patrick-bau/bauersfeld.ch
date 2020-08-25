import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worktime-calculator',
  templateUrl: './worktime-calculator.component.html',
  styleUrls: ['./worktime-calculator.component.scss']
})
export class WorktimeCalculatorComponent implements OnInit {
  timestamp = new Date();
  timestamps: Date[] = [];
  worktime = 0;
  endOfWork = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onTimeChanged(time: Date): void {
   this.timestamp = time;
  }

  stamp(): void {
    let newTimestamp = new Date(this.timestamp);
    this.timestamps.push(newTimestamp);
    this.calculateTimestamps();
  }

  removeStamp(stamp: Date): void {
    const index: number = this.timestamps.indexOf(stamp);
    this.timestamps.splice(index, 1);
    this.calculateTimestamps();
  }

  private calculateTimestamps(): void {
    this.timestamps = this.timestamps.sort((b , a) => {
      return a < b ? 1 : a === b ? 0 : -1;
    });

    if (this.timestamps.length % 2 === 0) {
      this.worktime = 0;
      for (let i = 0; i < this.timestamps.length-1; i += 2) {
        const endTime = this.timestamps[i+1].getHours() + ((this.timestamps[i+1].getMinutes() / 60 * 100) * 0.01);
        const startTime = this.timestamps[i].getHours() + ((this.timestamps[i].getMinutes() / 60 * 100) * 0.01)
        this.worktime += endTime - startTime;
      }
    }
  }
}
