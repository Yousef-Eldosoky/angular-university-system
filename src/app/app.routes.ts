import { Routes } from '@angular/router';
import { LoginComponent } from './identity/login/login.component';
import { HomeComponent } from './home/home.component';
import * as AuthGuard from './auth-guard.service';
import * as LoginGuard from './identity/auth.guard.service';
import { RegisterComponent } from './identity/register/register.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseManagementComponent } from './course-management/course-management.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home/dashboard", pathMatch: "full"},
    {path: "home" , component: HomeComponent, canActivate: [AuthGuard.AuthGuardService],
        children: [
            {path: 'attendance', component: AttendanceComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'course-management', component: CourseManagementComponent}
        ]},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard.AuthGuardService]},
    {path: 'register', component: RegisterComponent, canActivate: [LoginGuard.AuthGuardService]},
];
