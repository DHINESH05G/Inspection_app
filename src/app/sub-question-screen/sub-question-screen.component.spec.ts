import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubQuestionScreenComponent } from './sub-question-screen.component';

describe('SubQuestionScreenComponent', () => {
  let component: SubQuestionScreenComponent;
  let fixture: ComponentFixture<SubQuestionScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubQuestionScreenComponent]
    });
    fixture = TestBed.createComponent(SubQuestionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
