import { Component } from '@angular/core';
import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-logout',
  template: `<button class='logout-button' (click)="logout()">Logout</button>`,
  styleUrl: './logout.component.css',
  standalone: true
})
export class LogoutComponent {
  constructor(private identity: IdentityService) {}

  logout() {
    this.identity.logout();
  }
}
