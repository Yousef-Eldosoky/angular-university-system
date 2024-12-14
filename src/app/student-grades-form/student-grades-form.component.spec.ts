import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentGradesFormComponent } from './student-grades-form.component';

describe('StudentGradesFormComponent', () => {
  let component: StudentGradesFormComponent;
  let fixture: ComponentFixture<StudentGradesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGradesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGradesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
