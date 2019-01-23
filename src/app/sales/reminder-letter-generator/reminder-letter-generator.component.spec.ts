import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderLetterGeneratorComponent } from './reminder-letter-generator.component';

describe('ReminderLetterGeneratorComponent', () => {
  let component: ReminderLetterGeneratorComponent;
  let fixture: ComponentFixture<ReminderLetterGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderLetterGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderLetterGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
