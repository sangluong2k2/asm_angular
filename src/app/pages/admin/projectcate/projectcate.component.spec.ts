import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcateComponent } from './projectcate.component';

describe('ProjectcateComponent', () => {
  let component: ProjectcateComponent;
  let fixture: ComponentFixture<ProjectcateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
