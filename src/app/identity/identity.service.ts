import { Injectable } from '@angular/core';
import { UserLogin } from './user-login';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUser } from './current-user';
import { UserRegister } from './user-register';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  currentUser = new BehaviorSubject<CurrentUser | null | undefined>(undefined);
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: Partial<UserLogin>): Observable<string | null>  {
    return this.http.post<string | null>(`${this.apiUrl}/login?useCookies=true`, user, { withCredentials: true });
  }

  // Add register
  register(user: Partial<UserRegister>): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  isLoggedIn() {
    this.http.get<CurrentUser>(`${this.apiUrl}/manage/info`, { withCredentials: true }).subscribe(
      {
        next: (data) => {
          this.currentUser.next(data);
        },
        error: () => {
          this.currentUser.next(null);
        },
        complete: () => {
          console.log('completed');
        }
      }
    );
  }

  logout() {
    this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).subscribe(
      {
        complete: () => {
          console.log('Logout completed');
          this.currentUser.next(null);
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

}
