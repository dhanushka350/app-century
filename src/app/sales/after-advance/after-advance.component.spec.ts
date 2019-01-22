import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterAdvanceComponent } from './after-advance.component';

describe('AfterAdvanceComponent', () => {
  let component: AfterAdvanceComponent;
  let fixture: ComponentFixture<AfterAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
