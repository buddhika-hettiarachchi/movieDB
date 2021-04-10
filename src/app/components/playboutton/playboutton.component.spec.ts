import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybouttonComponent } from './playboutton.component';

describe('PlaybouttonComponent', () => {
  let component: PlaybouttonComponent;
  let fixture: ComponentFixture<PlaybouttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaybouttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybouttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
