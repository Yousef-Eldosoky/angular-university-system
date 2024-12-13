import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IdentityService } from '../identity/identity.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public identiyService: IdentityService) {}
}
