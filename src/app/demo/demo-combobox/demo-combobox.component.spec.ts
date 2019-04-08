import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComboboxComponent } from './demo-combobox.component';

describe('DemoComboboxComponent', () => {
  let component: DemoComboboxComponent;
  let fixture: ComponentFixture<DemoComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
