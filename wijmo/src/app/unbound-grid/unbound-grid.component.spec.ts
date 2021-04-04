import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnboundGridComponent } from './unbound-grid.component';

describe('UnboundGridComponent', () => {
  let component: UnboundGridComponent;
  let fixture: ComponentFixture<UnboundGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnboundGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnboundGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
