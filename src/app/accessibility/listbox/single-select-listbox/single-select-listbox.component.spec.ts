import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectListboxComponent } from './single-select-listbox.component';

describe('SingleSelectListboxComponent', () => {
  let component: SingleSelectListboxComponent;
  let fixture: ComponentFixture<SingleSelectListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
