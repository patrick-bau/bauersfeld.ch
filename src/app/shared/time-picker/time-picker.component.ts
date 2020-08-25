import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  @Input() time = new Date();
  @Output() timeChanged: EventEmitter<any> = new EventEmitter();
  public hoursControl: FormControl;
  public minutesControl: FormControl;

  constructor() {
  }

  ngOnInit() {
    this.hoursControl = new FormControl();
    this.minutesControl = new FormControl();
    this.hoursControl.setValue(this.time.getHours());
    this.minutesControl.setValue(this.time.getMinutes());
    this.timeChanged.emit(this.time);
    console.log(this.time);
  }

  increaseHours(): void {
    this.time.setHours(this.time.getHours() + 1);
    this.timeChanged.emit(this.time);
  }

  decreaseHours(): void {
    this.time.setHours(this.time.getHours() - 1);
    this.timeChanged.emit(this.time);
  }

  setHours(): void {
    this.time.setHours(this.hoursControl.value);
    this.timeChanged.emit(this.time);
  }

  increaseMinutes(): void {
    this.time.setMinutes(this.time.getMinutes() + 1);
    this.timeChanged.emit(this.time);
  }

  decreaseMinutes(): void {
    this.time.setMinutes(this.time.getMinutes() - 1);
    this.timeChanged.emit(this.time);
  }

  setMinutes(): void {
    this.time.setMinutes(this.minutesControl.value);
    this.timeChanged.emit(this.time);
  }
}
