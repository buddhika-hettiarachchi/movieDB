import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDesComponent } from './movie-des.component';

describe('MovieDesComponent', () => {
  let component: MovieDesComponent;
  let fixture: ComponentFixture<MovieDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
