import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamapsEditorsComponent } from './datamaps-editors.component';

describe('DatamapsEditorsComponent', () => {
  let component: DatamapsEditorsComponent;
  let fixture: ComponentFixture<DatamapsEditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatamapsEditorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamapsEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
