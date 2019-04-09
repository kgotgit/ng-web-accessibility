import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListgroupComponent } from './demo-listgroup.component';

describe('DemoListgroupComponent', () => {
  let component: DemoListgroupComponent;
  let fixture: ComponentFixture<DemoListgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoListgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoListgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
