import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleAnimationsComponent } from './circle-animations.component';

describe('CircleAnimationsComponent', () => {
  let component: CircleAnimationsComponent;
  let fixture: ComponentFixture<CircleAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
