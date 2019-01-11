import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentCostComponent } from './development-cost.component';

describe('DevelopmentCostComponent', () => {
  let component: DevelopmentCostComponent;
  let fixture: ComponentFixture<DevelopmentCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
