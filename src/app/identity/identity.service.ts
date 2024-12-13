import { Injectable } from '@angular/core';
import { UserLogin } from './user-login';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentUser } from './current-user';
import { UserRegister } from './user-register';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  currentUser = new BehaviorSubject<CurrentUser | null | undefined>(undefined);

  constructor(private http: HttpClient) { }

  login(user: Partial<UserLogin>): Observable<string | null>  {
    return this.http.post<string | null>('/api/login?useCookies=true', user);
  }

  // Add register
  register(user: Partial<UserRegister>): Observable<any> {
    return this.http.post('/api/register', user);
  }

  isLoggedIn() {
    this.http.get<CurrentUser>('/api/manage/info').subscribe(
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

}
