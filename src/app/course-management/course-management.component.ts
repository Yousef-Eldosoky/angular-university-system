import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';  // For showing notifications
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngFor

interface Course {
  id: number;
  name: string;
}

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,  // Import Angular Material Button Module
    MatSnackBarModule, // Import Angular Material SnackBar Module
    MatListModule,  // Import Angular Material List Module
    MatIconModule, // Import Angular Material Icon Module
    CommonModule  // Import CommonModule to use *ngFor
  ]
})
export class CourseManagementComponent {
  enrolledCourses: Course[] = [
    { id: 1, name: 'Math 101' },
    { id: 2, name: 'History 202' }
  ];

  availableCourses: Course[] = [
    { id: 3, name: 'Physics 103' },
    { id: 4, name: 'Chemistry 204' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  isCourseEnrolled(course: Course): boolean {
    return this.enrolledCourses.some(c => c.id === course.id);
  }

  addCourse(course: Course): void {
    if (!this.isCourseEnrolled(course)) {
      this.enrolledCourses.push(course);
      this.availableCourses = this.availableCourses.filter(c => c.id !== course.id);
    }
  }

  dropCourse(course: Course): void {
    // Remove the course from the enrolled list and add it back to available courses
    this.enrolledCourses = this.enrolledCourses.filter(c => c.id !== course.id);
    this.availableCourses.push(course);
  }
}
