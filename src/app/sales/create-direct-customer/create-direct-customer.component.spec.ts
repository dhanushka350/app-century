import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirectCustomerComponent } from './create-direct-customer.component';

describe('CreateDirectCustomerComponent', () => {
  let component: CreateDirectCustomerComponent;
  let fixture: ComponentFixture<CreateDirectCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDirectCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDirectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
