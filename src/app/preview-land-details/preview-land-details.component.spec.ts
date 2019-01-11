import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewLandDetailsComponent } from './preview-land-details.component';

describe('PreviewLandDetailsComponent', () => {
  let component: PreviewLandDetailsComponent;
  let fixture: ComponentFixture<PreviewLandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewLandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewLandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
