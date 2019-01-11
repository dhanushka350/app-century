import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasingCostsComponent } from './purchasing-costs.component';

describe('PurchasingCostsComponent', () => {
  let component: PurchasingCostsComponent;
  let fixture: ComponentFixture<PurchasingCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasingCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasingCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
