import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAlertsComponent } from './demo-alerts.component';

describe('DemoAlertsComponent', () => {
  let component: DemoAlertsComponent;
  let fixture: ComponentFixture<DemoAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
