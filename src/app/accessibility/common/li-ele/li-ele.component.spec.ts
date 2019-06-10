import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiEleComponent } from './li-ele.component';

describe('LiEleComponent', () => {
  let component: LiEleComponent;
  let fixture: ComponentFixture<LiEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
