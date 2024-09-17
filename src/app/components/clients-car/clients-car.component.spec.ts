import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCarComponent } from './clients-car.component';

describe('ClientsCarComponent', () => {
  let component: ClientsCarComponent;
  let fixture: ComponentFixture<ClientsCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
