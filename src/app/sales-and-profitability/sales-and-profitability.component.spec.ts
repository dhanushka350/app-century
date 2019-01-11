import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAndProfitabilityComponent } from './sales-and-profitability.component';

describe('SalesAndProfitabilityComponent', () => {
  let component: SalesAndProfitabilityComponent;
  let fixture: ComponentFixture<SalesAndProfitabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesAndProfitabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAndProfitabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
