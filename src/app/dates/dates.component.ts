import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  selectedYear: number;
  selectedMonth: any;
  date: number;
  @Input() set year(value: number) {
    this.selectedYear = value;
    console.log(this.selectedYear);
  }

  @Input() set month(value) {
    this.selectedMonth = value;
    console.log(this.selectedMonth);
    this.updateDates();
    
  }

  dates: number[][] = [[1,8,15,22,29],
                      [2,9,16,23,30],
                      [3,10,17,24,31],
                      [4,11,18,25,null],
                      [5,12,19,26,null],
                      [6,13,20,27,null],
                      [7,14,21,28,null]];
  constructor() { }

  ngOnInit() {
    this.updateDates();

  }

  ngOnChanges() {
    this.updateDates();
  }

  updateDates() {
    let dt = new Date(this.selectedMonth);
    this.date = dt.getDate();
    let month = dt.getMonth();
    if([0,2,4,6,7,9,11].indexOf(month) == -1)
    {
      if(month != 1)
      {
        this.dates[2][4] = null;
        this.dates[1][4] = 30;
        this.dates[0][4] = 29;
      }
      else {
        if(this.selectedYear % 4 == 0)
        {
          this.dates[2][4] = null;
          this.dates[1][4] = null;
          this.dates[0][4] = 29;
        } 
        else
        {
          this.dates[2][4] = null;
          this.dates[1][4] = null;
          this.dates[0][4] = null;
        } 
      }
    }
    else {
      this.dates[2][4] = 31;
      this.dates[1][4] = 30;
      this.dates[0][4] = 29;
    }
  }

}
