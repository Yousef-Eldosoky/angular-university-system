import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CourseManagementComponent } from "./course-management/course-management.component";
import { MatButtonModule } from '@angular/material/button';  // Import MatButtonModule


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  imports: [RouterModule, MatIconModule, MatButtonModule] ,


  template: `
  <header>
    <h1>Welcome Back!</h1>
    <div class="categories">
      <button class="category" routerLink="/home">dashboard</button>
      <button class="category" routerLink="/course-management">course management</button>
      <button class="category" routerLink="/attendance">attendance</button>
      <button class="category" routerLink="/grading-system">grading system</button>
      <button class="category" routerLink="/exams">exams</button>
      <button class="category" routerLink="/QA">QA</button>
      <button class="category" routerLink="/courses">courses</button>
    </div>
  </header>
  <div>
    <router-outlet></router-outlet>
  </div>
`,
})
export class AppComponent {}
