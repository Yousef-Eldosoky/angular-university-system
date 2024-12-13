import { Routes } from '@angular/router';
import { LoginComponent } from './identity/login/login.component';
import { HomeComponent } from './home/home.component';
import * as AuthGuard from './auth-guard.service';
import * as LoginGuard from './identity/auth.guard.service';

export const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard.AuthGuardService]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard.AuthGuardService] }
];
