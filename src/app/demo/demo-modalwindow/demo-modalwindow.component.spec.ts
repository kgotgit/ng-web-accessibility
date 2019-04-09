import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoModalwindowComponent } from './demo-modalwindow.component';

describe('DemoModalwindowComponent', () => {
  let component: DemoModalwindowComponent;
  let fixture: ComponentFixture<DemoModalwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoModalwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoModalwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
