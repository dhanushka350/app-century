import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlySettlementsScheduleComponent } from './early-settlements-schedule.component';

describe('EarlySettlementsScheduleComponent', () => {
  let component: EarlySettlementsScheduleComponent;
  let fixture: ComponentFixture<EarlySettlementsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlySettlementsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlySettlementsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
