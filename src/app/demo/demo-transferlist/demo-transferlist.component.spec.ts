import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTransferlistComponent } from './demo-transferlist.component';

describe('DemoTransferlistComponent', () => {
  let component: DemoTransferlistComponent;
  let fixture: ComponentFixture<DemoTransferlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTransferlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTransferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
