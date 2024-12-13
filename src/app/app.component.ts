import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule
import { IdentityService } from './identity/identity.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, MatIconModule, MatButtonModule],
})

export class AppComponent {  constructor(private identity: IdentityService) {}
  title = "University System";

  ngOnInit(): void {
    this.identity.isLoggedIn();
  }
}
