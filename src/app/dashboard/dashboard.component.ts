import { Component } from '@angular/core';
import { IdentityService } from '../identity/identity.service';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, DecimalPipe, DatePipe, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  currentDate = new Date();

  events = [
    { place: 'Conference Room A', time: '1:30 PM - 4:00 PM', guest: ['ENG.Ahmed Alashry','DR.Nabil Elghamry'] },
  ];


  constructor(public identiyService: IdentityService) {}
}
