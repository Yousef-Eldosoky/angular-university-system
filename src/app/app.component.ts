import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IdentityService } from './identity/identity.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'university-system';
  constructor(private identity: IdentityService) {}

  ngOnInit(): void {
    this.identity.isLoggedIn();
  }
}
