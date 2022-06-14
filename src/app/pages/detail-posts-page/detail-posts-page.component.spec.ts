import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPostsPageComponent } from './detail-posts-page.component';

describe('DetailPostsPageComponent', () => {
  let component: DetailPostsPageComponent;
  let fixture: ComponentFixture<DetailPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
