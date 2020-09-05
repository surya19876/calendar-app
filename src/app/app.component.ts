import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calendar-app';
  year: number;
  month: Date;

  updateYear(year: number)
  {
    this.year = year;
  }

  selectedMonth(month)
  {
    this.month = new Date(month);
  }
}
