import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclePComponent } from './circle-p.component';

describe('CirclePComponent', () => {
  let component: CirclePComponent;
  let fixture: ComponentFixture<CirclePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirclePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
