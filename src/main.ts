// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { CourseManagementComponent } from './app/course-management/course-management.component';



const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});

