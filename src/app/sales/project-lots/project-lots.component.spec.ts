import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLotsComponent } from './project-lots.component';

describe('ProjectLotsComponent', () => {
  let component: ProjectLotsComponent;
  let fixture: ComponentFixture<ProjectLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
