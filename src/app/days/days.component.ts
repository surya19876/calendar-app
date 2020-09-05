import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  days: string [][] = [['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                       ['Tue','Wed','Thu','Fri','Sat','Sun','Mon'],
                       ['Wed','Thu','Fri','Sat','Sun','Mon','Tue'],
                       ['Thu','Fri','Sat','Sun','Mon','Tue','Wed'],
                       ['Fri','Sat','Sun','Mon','Tue','Wed','Thu'],
                       ['Sat','Sun','Mon','Tue','Wed','Thu','Fri'],
                       ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']];

  constructor() { }

  ngOnInit() {
  }

}
