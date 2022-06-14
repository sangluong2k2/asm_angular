import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectPageComponent } from './admin-project-page.component';

describe('AdminProjectPageComponent', () => {
  let component: AdminProjectPageComponent;
  let fixture: ComponentFixture<AdminProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
