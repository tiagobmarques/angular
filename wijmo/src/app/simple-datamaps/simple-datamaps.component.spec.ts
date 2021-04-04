import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatamapsComponent } from './simple-datamaps.component';

describe('SimpleDatamapsComponent', () => {
  let component: SimpleDatamapsComponent;
  let fixture: ComponentFixture<SimpleDatamapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDatamapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDatamapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
