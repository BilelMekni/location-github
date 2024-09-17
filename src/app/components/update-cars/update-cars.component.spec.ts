import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarsComponent } from './update-cars.component';

describe('UpdateCarsComponent', () => {
  let component: UpdateCarsComponent;
  let fixture: ComponentFixture<UpdateCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
