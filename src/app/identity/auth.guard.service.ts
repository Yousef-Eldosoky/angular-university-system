import { Injectable } from '@angular/core';
import { CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { IdentityService } from './identity.service';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private identityService: IdentityService, private router: Router ) { }
  canActivate(): MaybeAsync<GuardResult> {
    return this.identityService.currentUser.pipe(
      filter((currentUser) => currentUser !== undefined),
      map(user => {
        if (user) {
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      })
    );
  }
}
