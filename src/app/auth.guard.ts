import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authservice:AuthService,private _router:Router){}

  canActivate():boolean{
    if(this._authservice.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }
  
}
