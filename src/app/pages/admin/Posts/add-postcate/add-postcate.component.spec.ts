import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostcateComponent } from './add-postcate.component';

describe('AddPostcateComponent', () => {
  let component: AddPostcateComponent;
  let fixture: ComponentFixture<AddPostcateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostcateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
