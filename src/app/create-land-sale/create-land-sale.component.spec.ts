import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLandSaleComponent } from './create-land-sale.component';

describe('CreateLandSaleComponent', () => {
  let component: CreateLandSaleComponent;
  let fixture: ComponentFixture<CreateLandSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLandSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLandSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
