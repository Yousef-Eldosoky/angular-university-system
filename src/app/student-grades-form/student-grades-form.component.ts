import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-grades-form',
  imports:[FormsModule],
  templateUrl: './student-grades-form.component.html',
  styleUrls: ['./student-grades-form.component.css'],
  standalone: true
})
export class StudentGradesFormComponent {
  studentName: string = '';
  studentSubject: string = '';
  studentGrade: number | null = null;
  constructor() {}
  addGrade(): void {
    const studentData = {
      name: this.studentName,
      subject: this.studentSubject,
      grade: this.studentGrade,
    };
    let students = JSON.parse(localStorage.getItem('studentsData') || '[]');
    students.push(studentData);
    localStorage.setItem('studentsData', JSON.stringify(students));
    this.studentName = '';
    this.studentSubject = '';
    this.studentGrade = null;
  }
}
