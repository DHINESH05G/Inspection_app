import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionMainScreenComponent } from './inspection-main-screen.component';

describe('InspectionMainScreenComponent', () => {
  let component: InspectionMainScreenComponent;
  let fixture: ComponentFixture<InspectionMainScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspectionMainScreenComponent]
    });
    fixture = TestBed.createComponent(InspectionMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
