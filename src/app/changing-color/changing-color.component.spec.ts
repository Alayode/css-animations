import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingColorComponent } from './changing-color.component';

describe('ChangingColorComponent', () => {
  let component: ChangingColorComponent;
  let fixture: ComponentFixture<ChangingColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangingColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
