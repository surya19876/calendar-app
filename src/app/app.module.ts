import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YearButtonComponent } from './year-button/year-button.component';
import { MonthsComponent } from './months/months.component';
import { DaysComponent } from './days/days.component';
import { DatesComponent } from './dates/dates.component';

@NgModule({
  declarations: [
    AppComponent,
    YearButtonComponent,
    MonthsComponent,
    DaysComponent,
    DatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
