import { Routes } from '@angular/router';
import { LoginComponent } from './identity/login/login.component';
import { HomeComponent } from './home/home.component';
import * as AuthGuard from './auth-guard.service';
import * as LoginGuard from './identity/auth.guard.service';
import { RegisterComponent } from './identity/register/register.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QaComponent } from './qa/qa.component';
import { CourseManagementComponent } from './course-management/course-management.component';
import { GradingSystemComponent } from './grading-system/grading-system.component';
import { StudentGradesFormComponent } from './student-grades-form/student-grades-form.component';
import { StudentGradesDisplayComponent } from './student-grades-display/student-grades-display.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home/dashboard", pathMatch: "full"},
    {path: "home" , component: HomeComponent, canActivate: [AuthGuard.AuthGuardService],
        children: [
            {path: 'attendance', component: AttendanceComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'QA', component: QaComponent},
            {path: 'course-management', component: CourseManagementComponent},
            {path: 'maintenance', component: MaintenanceComponent},
            {path: 'courses', component: MaintenanceComponent},
            {path: 'grading-system', component: GradingSystemComponent, children: [
                {path: 'form', component: StudentGradesFormComponent},
                {path: 'display', component: StudentGradesDisplayComponent},
            ]},
            {path: "**", component: NotFoundComponent}
        ]},
    {path: 'login', component: LoginComponent, canActivate: [LoginGuard.AuthGuardService]},
    {path: 'register', component: RegisterComponent, canActivate: [LoginGuard.AuthGuardService]},
    {path: "**", component: NotFoundComponent}
];
