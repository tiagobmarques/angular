import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdatavirtualComponent } from './odatavirtual.component';

describe('OdatavirtualComponent', () => {
  let component: OdatavirtualComponent;
  let fixture: ComponentFixture<OdatavirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdatavirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdatavirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
