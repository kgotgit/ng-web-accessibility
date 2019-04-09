import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTabsComponent } from './demo-tabs.component';

describe('DemoTabsComponent', () => {
  let component: DemoTabsComponent;
  let fixture: ComponentFixture<DemoTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
