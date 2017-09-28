
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	var self = this;
	if(this.isAuthenticated())
      return true;
    else
    {
      this.router.navigate(['/login']);
        return false;
    }	
    	
    	 
  }
  isAuthenticated() {
    if(localStorage.getItem('token')) 
     return true;
    else
     return false;
  }
}