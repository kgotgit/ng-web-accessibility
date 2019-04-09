import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTablesComponent } from './demo-tables.component';

describe('DemoTablesComponent', () => {
  let component: DemoTablesComponent;
  let fixture: ComponentFixture<DemoTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
