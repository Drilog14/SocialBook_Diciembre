import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanMatch, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanMatch {
  constructor( private authService: AuthService, private router: Router) {}

 private checkAuthStatus(): boolean | Observable<boolean> {
 return this.authService.checkAuthentication()
 .pipe(
  tap ( isAuthAuthenticated => {
if ( !isAuthAuthenticated) {
  this.router.navigate(['./auth/login'])
}
  })
 )
 }


  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean>  {
// console.log('can match')
//     console.log('canMatach implemented');
// return true
return this.checkAuthStatus();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Observable<boolean> {
    // console.log('Can activate')
    // console.log( route, state)
    // return true
    return this.checkAuthStatus();
  }


}
