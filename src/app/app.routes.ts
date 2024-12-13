import { Routes } from '@angular/router';
import { LoginComponent } from './identity/login/login.component';
import { HomeComponent } from './home/home.component';
import * as AuthGuard from './auth-guard.service';
import * as LoginGuard from './identity/auth.guard.service';
import { RegisterComponent } from './identity/register/register.component';
import { AttendanceComponent } from './attendance/attendance.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home" , component: HomeComponent, canActivate: [AuthGuard.AuthGuardService] },
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard.AuthGuardService]},
    {path: 'register', component: RegisterComponent, canActivate: [LoginGuard.AuthGuardService]},
    {path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard.AuthGuardService]}
];
