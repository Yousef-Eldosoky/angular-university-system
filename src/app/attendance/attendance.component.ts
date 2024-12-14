import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AttendanceRecord {
  code: string;
  name: string;
  status: string;
  date: string;
}

@Component({
  selector: 'app-attendance',
  imports:[FormsModule,NgFor,NgIf],
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  standalone: true
})
export class AttendanceComponent implements OnInit {
  studentName: string = '';
  studentCode: string = '';
  status: string = '';
  attendanceRecords: AttendanceRecord[] = [];

  ngOnInit(): void {
    const savedRecords = localStorage.getItem('attendanceRecords');
    if (savedRecords) {
      this.attendanceRecords = JSON.parse(savedRecords);
    }
  }

  markAttendance(): void {
    if (!/^[a-zA-Z\s]+$/.test(this.studentName)) {
      alert('Student Name must contain only letters and spaces.');
      return;
    }

    if (!/^[0-9]+$/.test(this.studentCode)) {
      alert('Student Code must contain only numbers.');
      return;
    }

    const record: AttendanceRecord = {
      code: this.studentCode,
      name: this.studentName,
      status: this.status,
      date: new Date().toLocaleString(),
    };

    this.attendanceRecords.push(record);
    this.studentName = '';
    this.studentCode = '';
    this.status = '';
    this.saveRecords();
  }

  deleteRecord(index: number): void {
    this.attendanceRecords.splice(index, 1);
    this.saveRecords();
  }

  private saveRecords(): void {
    localStorage.setItem(
      'attendanceRecords',
      JSON.stringify(this.attendanceRecords)
    );
  }
}
