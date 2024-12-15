import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-student-grades-display',
  imports: [NgFor],
  templateUrl: './student-grades-display.component.html',
  styleUrls: ['./student-grades-display.component.css'],
  standalone: true,
})
export class StudentGradesDisplayComponent implements OnInit {
  students: { name: string; subject: string; grade: number }[] = [];
  ngOnInit(): void {
    const storedData = localStorage.getItem('studentsData');
    if (storedData) {
      this.students = JSON.parse(storedData);
    }
  }
  deleteStudent(index: number): void {
    this.students.splice(index, 1);
    localStorage.setItem('studentsData', JSON.stringify(this.students));
  }
}
