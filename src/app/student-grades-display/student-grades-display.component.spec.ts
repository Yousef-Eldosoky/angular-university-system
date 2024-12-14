import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradesDisplayComponent } from './student-grades-display.component';

describe('StudentGradesDisplayComponent', () => {
  let component: StudentGradesDisplayComponent;
  let fixture: ComponentFixture<StudentGradesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGradesDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGradesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
