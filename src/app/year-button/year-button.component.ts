import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-button',
  templateUrl: './year-button.component.html',
  styleUrls: ['./year-button.component.scss']
})
export class YearButtonComponent implements OnInit {
  date: number;
  @Output() yearValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    let x = new Date();
    this.date = x.getFullYear();
    this.yearValue.emit(this.date);
  }

  public incrementYear(){
    this.date += 1;
    this.yearValue.emit(this.date);
  }

  public decrementYear(){
    this.date -= 1;
    this.yearValue.emit(this.date);
  }

}
