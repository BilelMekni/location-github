import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCarComponent } from './technical-car.component';

describe('TechnicalCarComponent', () => {
  let component: TechnicalCarComponent;
  let fixture: ComponentFixture<TechnicalCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
