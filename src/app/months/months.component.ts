import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss']
})
export class MonthsComponent implements OnInit {
  daysIndex: number[] = [0, 0, 0, 0, 0, 0, 0];
  months: string [][] = [['','','','','','',''],['','','','','','',''],['','','','','','','']];
  selectedRow: number;
  selectedCol: number;
  
  @Input() set year(value: number){
    this.populateMonths(value);
  }

  @Output() selectedMonth = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    
  }

  populateMonths(year) {
    this.daysIndex = [0, 0, 0, 0, 0, 0, 0];
    this.months = [['','','','','','',''],['','','','','','',''],['','','','','','','']];
    let currentDate = new Date();
    for(var i=0; i<12; i++)
    {
      
      let dt = new Date(year, i, 1);
      
      let dayOfWeek = dt.getDay();
      if(currentDate.getFullYear() == year)
      {
        if(dt.getMonth() == currentDate.getMonth()) 
        {
          this.selectedCol = (dayOfWeek+6)%7;
          this.selectedRow = this.daysIndex[dayOfWeek];
        }
      }
      this.months[this.daysIndex[dayOfWeek]][(dayOfWeek+6)%7] = dt.toString();
      this.daysIndex[dayOfWeek] += 1;
      this.selectedMonth.emit(currentDate.toString());
    }
  }

  selectMonth(month, i, j){
    this.selectedRow = i;
    this.selectedCol = j;
    this.selectedMonth.emit(month);
  }

}
