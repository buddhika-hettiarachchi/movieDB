import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachCardComponent } from './serach-card.component';

describe('SerachCardComponent', () => {
  let component: SerachCardComponent;
  let fixture: ComponentFixture<SerachCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
