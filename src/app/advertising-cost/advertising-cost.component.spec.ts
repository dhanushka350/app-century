import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingCostComponent } from './advertising-cost.component';

describe('AdvertisingCostComponent', () => {
  let component: AdvertisingCostComponent;
  let fixture: ComponentFixture<AdvertisingCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisingCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
