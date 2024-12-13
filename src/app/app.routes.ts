import { Routes } from '@angular/router';
import { LoginComponent } from './identity/login/login.component';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { AttendanceComponent } from './attendance/attendance.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
    {path: 'attendance', component: AttendanceComponent}
];
