import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCarComponent } from './services-car.component';

describe('ServicesCarComponent', () => {
  let component: ServicesCarComponent;
  let fixture: ComponentFixture<ServicesCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
