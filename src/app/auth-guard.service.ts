import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { IdentityService } from './identity/identity.service';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private identity: IdentityService) { }
  canActivate(): MaybeAsync<GuardResult> {
      return this.identity.currentUser.pipe(
        filter((currentUser) => currentUser !== undefined),
        map((currentUser) => {
        if(!currentUser) {
          this.router.navigateByUrl('/login');
          return false;
        } else {
          return true;
        }
      }))
  }
  
}
