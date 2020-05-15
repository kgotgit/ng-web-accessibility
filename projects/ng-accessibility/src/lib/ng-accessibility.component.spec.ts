import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAccessibilityComponent } from './ng-accessibility.component';

describe('NgAccessibilityComponent', () => {
  let component: NgAccessibilityComponent;
  let fixture: ComponentFixture<NgAccessibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAccessibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
