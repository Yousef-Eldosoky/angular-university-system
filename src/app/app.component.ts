import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IdentityService } from './identity/identity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule,CommonModule],
})

export class AppComponent {
  title = "University System";

  constructor(private identity: IdentityService) {}

  ngOnInit(): void {
    this.identity.isLoggedIn();
  }
}
