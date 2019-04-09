import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProgressbarsComponent } from './demo-progressbars.component';

describe('DemoProgressbarsComponent', () => {
  let component: DemoProgressbarsComponent;
  let fixture: ComponentFixture<DemoProgressbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProgressbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProgressbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
