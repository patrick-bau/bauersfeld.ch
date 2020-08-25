import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimeCalculatorComponent } from './worktime-calculator.component';

describe('WorktimeCalculatorComponent', () => {
  let component: WorktimeCalculatorComponent;
  let fixture: ComponentFixture<WorktimeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
