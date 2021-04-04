import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDatamapsComponent } from './dynamic-datamaps.component';

describe('DynamicDatamapsComponent', () => {
  let component: DynamicDatamapsComponent;
  let fixture: ComponentFixture<DynamicDatamapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDatamapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDatamapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
