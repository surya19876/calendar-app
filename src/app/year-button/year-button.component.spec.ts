import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearButtonComponent } from './year-button.component';

describe('YearButtonComponent', () => {
  let component: YearButtonComponent;
  let fixture: ComponentFixture<YearButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
