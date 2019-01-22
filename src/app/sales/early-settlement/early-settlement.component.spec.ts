import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlySettlementComponent } from './early-settlement.component';

describe('EarlySettlementComponent', () => {
  let component: EarlySettlementComponent;
  let fixture: ComponentFixture<EarlySettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlySettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlySettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
