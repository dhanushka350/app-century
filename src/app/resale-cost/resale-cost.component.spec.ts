import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleCostComponent } from './resale-cost.component';

describe('ResaleCostComponent', () => {
  let component: ResaleCostComponent;
  let fixture: ComponentFixture<ResaleCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaleCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaleCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
