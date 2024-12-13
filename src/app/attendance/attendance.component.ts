import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css',
})
export class AttendanceComponent {
  studentName: string = '';
  studentCode: string = '';
  status: string = '';
  attendanceRecords: any[] = [];

  markAttendance() {
    if (!this.studentCode) {
      alert('Please enter the student code.');
      return;
    }

    const record = {
      code: this.studentCode,
      name: this.studentName,
      status: this.status,
      date: new Date().toLocaleString(),
    };

    this.attendanceRecords.push(record);
    this.studentName = '';
    this.studentCode = '';
    this.status = '';
  }
}
