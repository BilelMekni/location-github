import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileCarComponent } from './automobile-car.component';

describe('AutomobileCarComponent', () => {
  let component: AutomobileCarComponent;
  let fixture: ComponentFixture<AutomobileCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
