import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrightComponent } from './outright.component';

describe('OutrightComponent', () => {
  let component: OutrightComponent;
  let fixture: ComponentFixture<OutrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
