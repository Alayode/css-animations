import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingFunctionComponent } from './timing-function.component';

describe('TimingFunctionComponent', () => {
  let component: TimingFunctionComponent;
  let fixture: ComponentFixture<TimingFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
