import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTreeviewComponent } from './demo-treeview.component';

describe('DemoTreeviewComponent', () => {
  let component: DemoTreeviewComponent;
  let fixture: ComponentFixture<DemoTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
