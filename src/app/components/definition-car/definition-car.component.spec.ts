import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionCarComponent } from './definition-car.component';

describe('DefinitionCarComponent', () => {
  let component: DefinitionCarComponent;
  let fixture: ComponentFixture<DefinitionCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
