import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceClentsComponent } from './espace-clents.component';

describe('EspaceClentsComponent', () => {
  let component: EspaceClentsComponent;
  let fixture: ComponentFixture<EspaceClentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceClentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceClentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
