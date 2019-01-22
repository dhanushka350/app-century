import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAgreementsComponent } from './previous-agreements.component';

describe('PreviousAgreementsComponent', () => {
  let component: PreviousAgreementsComponent;
  let fixture: ComponentFixture<PreviousAgreementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousAgreementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
