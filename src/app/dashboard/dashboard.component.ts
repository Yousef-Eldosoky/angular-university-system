import { Component } from '@angular/core';
import { IdentityService } from '../identity/identity.service';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public identiyService: IdentityService) {}
}
