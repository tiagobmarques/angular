import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPickerComponent } from './column-picker.component';

describe('ColumnPickerComponent', () => {
  let component: ColumnPickerComponent;
  let fixture: ComponentFixture<ColumnPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
